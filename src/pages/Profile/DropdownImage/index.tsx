/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { DropdownMenu } from '../../../components/DropdownMenu';
import { UseAuth } from '../../../contexts/useAuth';

import { Container } from './style';

export function DropdownImage() {
  const { user } = UseAuth();

  return (
    <DropdownMenu.Root>
      <Container>
        <DropdownMenu.Trigger>
          {user?.imagePath && (
            <img
              src={`http://localhost:3001/uploads/${user?.imagePath}`}
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

        <DropdownMenu.Content>
          <DropdownMenu.Item>Escolher foto</DropdownMenu.Item>
        </DropdownMenu.Content>
      </Container>
    </DropdownMenu.Root>
  );
}
