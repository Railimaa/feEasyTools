import {
  FileTextIcon,
  LightningBoltIcon,
  PlusIcon,
} from '@radix-ui/react-icons';

import { DropdownMenu } from '../../../../components/DropdownMenu';
import { useTaskContext } from '../TaskContext/useTaskContext';

import { Container } from './style';

export function Fab() {
  const { handleOpenNewTaskModal, handleOpenCategoryModal } = useTaskContext();

  return (
    <DropdownMenu.Root>
      <Container>
        <DropdownMenu.Trigger>
          <PlusIcon width={24} height={24} color="#fff" />
        </DropdownMenu.Trigger>

        <DropdownMenu.Content>
          <DropdownMenu.Item
            style={{ gap: '8px' }}
            onSelect={handleOpenNewTaskModal}
          >
            <FileTextIcon width={18} height={18} color="#fff" />
            Nova tarefa
          </DropdownMenu.Item>

          <DropdownMenu.Item
            style={{ gap: '8px' }}
            onSelect={handleOpenCategoryModal}
          >
            <LightningBoltIcon width={18} height={18} color="#fff" />
            Nova categoria
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </Container>
    </DropdownMenu.Root>
  );
}
