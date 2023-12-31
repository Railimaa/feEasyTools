import { Pencil2Icon } from '@radix-ui/react-icons';
import { memo } from 'react';

import { Trash } from '../../../../../assets/Icons/Trash';
import { ConfirmDeleteModal } from '../../../../../components/ConfirmDeleteModal';
import { IContact } from '../../../../../types/Contact';
import { CategoryContactIcon } from '../../Categories/DropdownIcons/CategoryContactIcon';
import { iconsMap } from '../../Categories/DropdownIcons/CategoryContactIcon/iconsMap';

import { Container } from './style';
import { useCard } from './useCard';

interface ICardProps {
  filteredContact: IContact[];
  handleOpenEditedContactModal: (contact: IContact) => void;
}

function Card({ filteredContact, handleOpenEditedContactModal }: ICardProps) {
  const {
    openDeleteModal,
    handleOpenDeleteModal,
    handleCloseDeleteModal,
    handleDeleteContact,
    isLoading,
  } = useCard();

  if (openDeleteModal) {
    return (
      <ConfirmDeleteModal
        title="contato"
        subtitle="este"
        onConfirm={handleDeleteContact}
        onClose={handleCloseDeleteModal}
        isLoading={isLoading}
      />
    );
  }

  return filteredContact.map((contact) => (
    <Container key={contact.id}>
      <div className="info">
        <div className="nameAndCategory">
          <strong>{contact.name}</strong>
          {contact.categoryContact?.name && (
            <small>
              {contact.categoryContact.name}
              {contact.categoryContact.icon && (
                <CategoryContactIcon
                  name={contact.categoryContact.icon as keyof typeof iconsMap}
                />
              )}
            </small>
          )}
        </div>

        <span>{contact.email}</span>
        <span>{contact.phone}</span>
      </div>
      <div className="actions">
        <button
          type="button"
          onClick={() => handleOpenEditedContactModal(contact)}
        >
          <Pencil2Icon width={24} height={24} color="#6741d9" />
        </button>

        <button type="button" onClick={() => handleOpenDeleteModal(contact)}>
          <Trash />
        </button>
      </div>
    </Container>
  ));
}

export default memo(Card);
