import {
  CheckCircledIcon,
  ChevronDownIcon,
  CrossCircledIcon,
  MixerVerticalIcon,
} from '@radix-ui/react-icons';

import { DropdownMenu } from '../../../../../components/DropdownMenu';

import { Container } from './style';

interface ITypeTaskDropdown {
  handleApplyFilterTypeTask: (type: boolean | undefined) => void;
  typeTask: boolean | undefined;
}

export function TypeTaskDropdown({
  handleApplyFilterTypeTask,
  typeTask,
}: ITypeTaskDropdown) {
  return (
    <DropdownMenu.Root>
      <Container>
        <DropdownMenu.Trigger>
          {typeTask === true && (
            <CheckCircledIcon width={20} height={20} color="#00c16c" />
          )}
          {typeTask === false && (
            <CrossCircledIcon width={20} height={20} color="#C92A2A" />
          )}

          {typeTask === undefined && (
            <MixerVerticalIcon width={20} height={20} color="#fff" />
          )}

          {typeTask === true && <span>Conclúidas</span>}
          {typeTask === false && <span>Não conclúidas</span>}
          {typeTask === undefined && <span>Tarefas</span>}

          <ChevronDownIcon width={24} height={24} color="#fff" />
        </DropdownMenu.Trigger>

        <DropdownMenu.Content>
          <DropdownMenu.Item
            style={{ gap: '8px' }}
            onSelect={() => handleApplyFilterTypeTask(true)}
          >
            Concúidas
            <CheckCircledIcon width={20} height={20} color="#00c16c" />
          </DropdownMenu.Item>

          <DropdownMenu.Item
            style={{ gap: '8px' }}
            onSelect={() => handleApplyFilterTypeTask(false)}
          >
            Não concluídas
            <CrossCircledIcon width={20} height={20} color="#C92A2A" />
          </DropdownMenu.Item>

          <DropdownMenu.Item
            style={{ gap: '8px' }}
            onSelect={() => handleApplyFilterTypeTask(undefined)}
          >
            Tarefas
            <MixerVerticalIcon width={20} height={20} color="#fff" />
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </Container>
    </DropdownMenu.Root>
  );
}
