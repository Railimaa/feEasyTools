/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Trash } from '../../../assets/Icons/Trash';
import { DropdownMenu } from '../../../components/DropdownMenu';
import { UseAuth } from '../../../contexts/useAuth';

import { Container } from './style';

interface IDropdownImageProps {
  handleOpenDeleteModal: () => void;
}

export function DropdownImage({ handleOpenDeleteModal }: IDropdownImageProps) {
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

        {user?.imagePath && (
          <DropdownMenu.Content>
            <DropdownMenu.Item
              style={{ gap: '8px' }}
              onSelect={handleOpenDeleteModal}
            >
              Remover foto
              <Trash />
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        )}
      </Container>
    </DropdownMenu.Root>
  );
}
