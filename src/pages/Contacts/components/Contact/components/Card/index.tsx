import { Pencil2Icon } from '@radix-ui/react-icons';

import { Trash } from '../../../../../../assets/Icons/Trash';
import { IContact } from '../../../../../../types/Contact';

import { Container } from './style';

interface ICardProps {
  contact: IContact;
}

export function Card({ contact }: ICardProps) {
  return (
    <Container>
      <div className="info">
        <div className="nameAndCategory">
          <strong>{contact.name}</strong>
          <small>
            {contact.categoryContact.name && contact.categoryContact.name}
          </small>
        </div>

        <span>{contact.email}</span>
        <span>{contact.phone}</span>
      </div>

      <div className="actions">
        <button type="button">
          <Pencil2Icon width={24} height={24} color="#6741d9" />
        </button>

        <button type="button">
          <Trash />
        </button>
      </div>
    </Container>
  );
}
