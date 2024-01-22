/* eslint-disable react/require-default-props */
import { Trash } from '../../assets/Icons/Trash';
import { useTheme } from '../../contexts/useTheme';
import { Button } from '../Button';
import { Modal } from '../Modal';

import { Container } from './style';

interface IConfirmDeleteModalProps {
  title: string;
  description?: string;
  onClose: () => void;
  onConfirm: () => void;
  isLoading: boolean;
  subtitle?: string;
}

export function ConfirmDeleteModal({
  title,
  description,
  onClose,
  onConfirm,
  isLoading,
  subtitle,
}: IConfirmDeleteModalProps) {
  const { theme } = useTheme();

  return (
    <Modal open title="Excluir" onClose={onClose}>
      <Container theme={theme}>
        <div className="icon">
          <Trash />
        </div>

        <p className="text">
          Tem certeza que deseja excluir {subtitle || 'esta'} {title}?
        </p>

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
