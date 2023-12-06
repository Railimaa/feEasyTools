import { Pencil2Icon } from '@radix-ui/react-icons';

import { Trash } from '../../../../../../assets/Icons/Trash';

import { Container } from './style';

export function Card() {
  return (
    <Container>
      <div className="info">
        <div className="nameAndCategory">
          <strong>Mateus Itallo</strong>
          <small>instagram</small>
        </div>

        <span>mateus@email.com</span>
        <span>(11) 99776-8987</span>
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
