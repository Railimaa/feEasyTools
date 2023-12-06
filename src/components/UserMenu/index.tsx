import { ExitIcon } from '@radix-ui/react-icons';

import { DropdownMenu } from '../DropdownMenu';

import { Container, ContainerItem } from './style';
import { useUserMenu } from './useUserMenu';

export function UserMenu() {
  const { user, signOut } = useUserMenu();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger style={{ border: 'none', outline: 'none' }}>
        <Container>
          <span>{user?.name.slice(0, 1)}</span>
          <span>{user?.secondName.slice(0, 1)}</span>
        </Container>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content style={{ width: '200px' }}>
        <DropdownMenu.Item>
          <ContainerItem>
            <small>
              {user?.name} {user?.secondName}
            </small>
            <small>{user?.email}</small>
          </ContainerItem>
        </DropdownMenu.Item>

        <DropdownMenu.Item
          onSelect={signOut}
          style={{ justifyContent: 'space-between' }}
        >
          Sair
          <ExitIcon />
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
