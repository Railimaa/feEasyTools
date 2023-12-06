import { AvatarIcon, MagicWandIcon, PlusIcon } from '@radix-ui/react-icons';

import { DropdownMenu } from '../../../../components/DropdownMenu';

import { Container } from './style';

export function Fab() {
  return (
    <Container>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <PlusIcon width={24} height={24} color="#fff" />
        </DropdownMenu.Trigger>

        <DropdownMenu.Content side="top">
          <DropdownMenu.Item style={{ gap: '8px' }}>
            <AvatarIcon width={24} height={24} color="#6741d9" />
            Novo contato
          </DropdownMenu.Item>

          <DropdownMenu.Item style={{ gap: '8px' }}>
            <MagicWandIcon width={24} height={24} color="#6741d9" />
            Nova categoria
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </Container>
  );
}
