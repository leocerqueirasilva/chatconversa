import { useToast } from '@/hooks/useToast';
import { Typebot } from '@typebot.io/schemas';
import React, { useEffect } from 'react';

type Props = {
  jsonTemplate: any; // Ajuste o tipo conforme necessário
  onNewTypebot: (typebot: Typebot) => void;
};

export const ImportTypebotFromFile = ({ jsonTemplate, onNewTypebot }: Props) => {
  const { showToast } = useToast();

  useEffect(() => {
    try {
      const typebot = JSON.parse(JSON.stringify(jsonTemplate));
      onNewTypebot({
        ...typebot,
        events: typebot.events ?? null,
        icon: typebot.icon ?? null,
        name: typebot.name ?? 'My typebot',
      } as Typebot);
    } catch (err) {
      console.error(err);
      showToast({
        description: 'Erro ao importar o template.',
        details: {
          content: JSON.stringify(err, null, 2),
          lang: 'json',
        },
      });
    }
  }, [jsonTemplate, onNewTypebot, showToast]);

  return null;
};
