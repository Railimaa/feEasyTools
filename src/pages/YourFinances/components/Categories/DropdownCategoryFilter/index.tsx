import {
  ArrowBottomRightIcon,
  ArrowTopRightIcon,
  ChevronDownIcon,
  MixerVerticalIcon,
} from '@radix-ui/react-icons';

import { DropdownMenu } from '../../../../../components/DropdownMenu';
import { useTheme } from '../../../../../contexts/useTheme';

import { Container } from './style';

interface IDropdownCategoryFilterprops {
  handleApplyFilter: (type: 'INCOME' | 'EXPENSE' | undefined) => void;
  selectType: 'INCOME' | 'EXPENSE' | undefined;
}

export function DropdownCategoryFilter({
  handleApplyFilter,
  selectType,
}: IDropdownCategoryFilterprops) {
  const { theme } = useTheme();

  return (
    <DropdownMenu.Root>
      <Container theme={theme}>
        <DropdownMenu.Trigger>
          {selectType === 'INCOME' && (
            <ArrowTopRightIcon width={20} height={20} color="#087F5B" />
          )}
          {selectType === 'EXPENSE' && (
            <ArrowBottomRightIcon width={20} height={20} color="#ff1a1a" />
          )}

          {selectType === undefined && (
            <MixerVerticalIcon
              width={20}
              height={20}
              color={theme === 'dark' ? '#fff' : '#000'}
            />
          )}

          {selectType === 'INCOME' && <span>Categorias receitas</span>}
          {selectType === 'EXPENSE' && <span>Categorias despesas</span>}
          {selectType === undefined && <span>Categorias</span>}

          <ChevronDownIcon
            width={24}
            height={24}
            color={theme === 'dark' ? '#fff' : '#000'}
          />
        </DropdownMenu.Trigger>

        <DropdownMenu.Content>
          <DropdownMenu.Item
            style={{ gap: '8px' }}
            onSelect={() => handleApplyFilter('INCOME')}
          >
            Categorias receitas
            <ArrowTopRightIcon width={20} height={20} color="#087F5B" />
          </DropdownMenu.Item>

          <DropdownMenu.Item
            style={{ gap: '8px' }}
            onSelect={() => handleApplyFilter('EXPENSE')}
          >
            Categorias despesas
            <ArrowBottomRightIcon width={20} height={20} color="#ff1a1a" />
          </DropdownMenu.Item>

          <DropdownMenu.Item
            style={{ gap: '8px' }}
            onSelect={() => handleApplyFilter(undefined)}
          >
            Categorias
            <MixerVerticalIcon
              width={20}
              height={20}
              color={theme === 'dark' ? '#fff' : '#000'}
            />
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </Container>
    </DropdownMenu.Root>
  );
}
