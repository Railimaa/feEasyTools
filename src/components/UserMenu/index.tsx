import { ExitIcon, PersonIcon } from '@radix-ui/react-icons';
import { NavLink } from 'react-router-dom';

import { DropdownMenu } from '../DropdownMenu';

import { Container } from './style';
import { useUserMenu } from './useUserMenu';

export function UserMenu() {
  const { user, signOut } = useUserMenu();

  return (
    <DropdownMenu.Root>
      <Container>
        <DropdownMenu.Trigger style={{ border: 'none', outline: 'none' }}>
          {user?.imagePath && (
            <img
              src={`http://localhost:3001/uploads/${user.imagePath}`}
              alt=""
            />
          )}

          {!user?.imagePath && (
            <div className="noImage">
              <span>{user?.name.slice(0, 1).toUpperCase()}</span>
              <span>{user?.secondName.slice(0, 1).toUpperCase()}</span>
            </div>
          )}
        </DropdownMenu.Trigger>

        <DropdownMenu.Content style={{ width: '200px' }}>
          <DropdownMenu.Item
            onSelect={signOut}
            style={{ justifyContent: 'space-between' }}
          >
            Sair
            <ExitIcon />
          </DropdownMenu.Item>

          <DropdownMenu.Item>
            <NavLink to="/profile">
              Editar perfil
              <PersonIcon style={{ marginLeft: '55px' }} />
            </NavLink>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </Container>
    </DropdownMenu.Root>
  );
}
