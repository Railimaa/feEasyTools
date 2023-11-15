/* eslint-disable react/require-default-props */
import { Trash } from '../../assets/Icons/Trash';
import { Button } from '../Button';
import { Modal } from '../Modal';

import { Container } from './style';

interface IConfirmDeleteModalProps {
  title: string;
  description?: string;
  onClose: () => void;
  onConfirm: () => void;
  isLoading: boolean;
}

export function ConfirmDeleteModal({
  title,
  description,
  onClose,
  onConfirm,
  isLoading,
}: IConfirmDeleteModalProps) {
  return (
    <Modal open title="Excluir" onClose={onClose}>
      <Container>
        <div className="icon">
          <Trash />
        </div>

        <p className="text">Tem certeza que deseja excluir esta {title}?</p>

        {description && (
          <div className="description">
            <p>{description}</p>
          </div>
        )}

        <div className="buttons">
          <Button isLoading={isLoading} onClick={onConfirm} variant="danger">
            Sim, desejo excluir
          </Button>
          <Button onClick={onClose} disabled={isLoading} variant="ghost">
            Cancelar
          </Button>
        </div>
      </Container>
    </Modal>
  );
}
