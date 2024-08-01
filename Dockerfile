FROM node:20-bullseye-slim AS base
WORKDIR /app
ARG SCOPE
ENV SCOPE=${SCOPE}
RUN apt-get -qy update \
    && apt-get -qy --no-install-recommends install \
    openssl \
    && apt-get autoremove -yq \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*
RUN npm --global install pnpm@9.5.0

FROM base AS pruner
RUN npm --global install turbo@2.0.5
WORKDIR /app
COPY . .
RUN turbo prune ${SCOPE} --docker

FROM base AS builder
RUN apt-get -qy update && apt-get -qy --no-install-recommends install openssl git python3 g++ build-essential
WORKDIR /app
COPY .gitignore .gitignore
COPY .npmrc .pnpmfile.cjs ./
COPY --from=pruner /app/out/json/ .
COPY --from=pruner /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
RUN pnpm install
COPY --from=pruner /app/out/full/ .
COPY turbo.json turbo.json

RUN SKIP_ENV_CHECK=true pnpm turbo run build --filter=${SCOPE}...

FROM base AS runner
WORKDIR /app

# Certifique-se de que o usuário nextjs e nodejs existem
RUN groupadd -r nextjs && useradd -r -g nextjs nextjs
RUN groupadd -r nodejs || true

COPY --from=builder --chown=node:node /app/apps/${SCOPE}/.next/standalone ./
COPY --from=builder --chown=node:node /app/apps/${SCOPE}/.next/static ./apps/${SCOPE}/.next/static
COPY --from=builder --chown=nextjs:nextjs /app/apps/${SCOPE}/public ./apps/${SCOPE}/public

## Copiar next-runtime-env e suas dependências para injeção de variáveis públicas em tempo de execução
COPY --from=builder /app/node_modules/.pnpm/chalk@4.1.2/node_modules/chalk ./node_modules/chalk
COPY --from=builder /app/node_modules/.pnpm/chalk@4.1.2/node_modules/ansi-styles ./node_modules/ansi-styles
COPY --from=builder /app/node_modules/.pnpm/chalk@4.1.2/node_modules/supports-color ./node_modules/supports-color
COPY --from=builder /app/node_modules/.pnpm/has-flag@4.0.0/node_modules/has-flag ./node_modules/has-flag
COPY --from=builder /app/node_modules/.pnpm/next-runtime-env@1.6.2/node_modules/next-runtime-env/build ./node_modules/next-runtime-env/build

## Copiar pacote prisma e suas dependências e gerar o schema
COPY ./packages/prisma/postgresql ./packages/prisma/postgresql
COPY --from=builder /app/node_modules/.pnpm/@prisma+client@5.12.1_prisma@5.12.1/node_modules/@prisma/client ./node_modules/@prisma/client
COPY --from=builder /app/node_modules/.pnpm/@prisma+engines@5.12.1/node_modules/@prisma/engines ./node_modules/@prisma/engines
COPY --from=builder /app/node_modules/.pnpm/@prisma+debug@5.12.1/node_modules/@prisma/debug ./node_modules/@prisma/debug
COPY --from=builder /app/node_modules/.pnpm/@prisma+get-platform@5.12.1/node_modules/@prisma/get-platform ./node_modules/@prisma/get-platform
COPY --from=builder /app/node_modules/.pnpm/@prisma+fetch-engine@5.12.1/node_modules/@prisma/fetch-engine ./node_modules/@prisma/fetch-engine
COPY --from=builder /app/node_modules/.pnpm/@prisma+engines-version@5.12.0-21.473ed3124229e22d881cb7addf559799debae1ab/node_modules/@prisma/engines-version ./node_modules/@prisma/engines-version
COPY --from=builder /app/node_modules/.pnpm/prisma@5.12.1/node_modules/prisma ./node_modules/prisma
COPY --from=builder /app/node_modules/.bin/prisma ./node_modules/.bin/prisma
RUN ./node_modules/.bin/prisma generate --schema=packages/prisma/postgresql/schema.prisma

COPY scripts/${SCOPE}-entrypoint.sh ./
RUN chmod +x ./${SCOPE}-entrypoint.sh
ENTRYPOINT ./${SCOPE}-entrypoint.sh

EXPOSE 3000
ENV PORT 3000
