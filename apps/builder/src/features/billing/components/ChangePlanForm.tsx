import {
  Button,
  HStack,
  Stack,
  Text,
  useToast,
} from '@chakra-ui/react'
import { Plan, WorkspaceRole } from '@typebot.io/prisma'
import { useState } from 'react'
import { ParentModalProvider } from '@/features/graph/providers/ParentModalProvider'
import { useUser } from '@/features/account/hooks/useUser'
import { StarterPlanPricingCard } from './StarterPlanPricingCard'
import { ProPlanPricingCard } from './ProPlanPricingCard'
import { useTranslate } from '@tolgee/react'
import { WorkspaceInApp } from '@/features/workspace/WorkspaceProvider'

type Props = {
  workspace: WorkspaceInApp
  currentRole?: WorkspaceRole
  excludedPlans?: ('STARTER' | 'PRO')[]
}

type SubscriptionPlan = 'STARTER' | 'PRO'
type Currency = 'usd' | 'eur'

interface NewSubscription {
  plan: SubscriptionPlan
  workspaceId: string
  currency: Currency
  returnUrl?: string
}

export const ChangePlanForm = ({
  workspace,
  currentRole,
  excludedPlans,
}: Props) => {
  const { t } = useTranslate()
  const { user } = useUser()

  const handlePayClick = async (plan: SubscriptionPlan) => {
    if (!user) return

    const newSubscription: NewSubscription = {
      plan,
      workspaceId: workspace.id,
      currency: 'usd', // Defina a moeda padrão ou personalize conforme necessário
    }

  }

  if (workspace.plan !== Plan.FREE) return null

  if (currentRole !== WorkspaceRole.ADMIN) {
    return (
      <Text>
        Apenas administradores do workspace podem alterar o plano de assinatura. 
        Entre em contato com o administrador do workspace para fazer alterações.
      </Text>
    )
  }

  return (
    <Stack spacing={6}>
      <HStack maxW="500px" spacing={4}>
        <Text fontSize="md">Quer conhecer mais?</Text>
        <Button
          colorScheme="blue"
          onClick={() => {
            window.open('https://chatresponde.com.br/', '_blank')
          }}
        >
          Ver mais
        </Button>
      </HStack>

     
      <Stack align="flex-end" spacing={6}>
        <HStack alignItems="stretch" spacing="4" w="full">
          {excludedPlans?.includes('PRO') ? null : (
            <StarterPlanPricingCard
              currentPlan={workspace.plan}
              onPayClick={() => handlePayClick('PRO')}
              isLoading={false}
              currency="usd"
            />
          )}

          {excludedPlans?.includes('PRO') ? null : (
            <ProPlanPricingCard
              currentPlan={workspace.plan}
              onPayClick={() => handlePayClick('PRO')}
              isLoading={false}
              currency="usd"
            />
          )}
        </HStack>
      </Stack>
    </Stack>
  )
}
