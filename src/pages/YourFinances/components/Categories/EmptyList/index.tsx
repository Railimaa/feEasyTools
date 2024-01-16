import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

import { Button } from '../../../../../components/Button';
import { useTheme } from '../../../../../contexts/useTheme';

import { Container } from './style';

export function EmptyList({
  handleOpenNewCategoryModal,
}: {
  handleOpenNewCategoryModal: () => void;
}) {
  const { theme } = useTheme();

  return (
    <Container theme={theme}>
      <div className="title">
        <span>Nenhuma categoria cadastrada!</span>
        <MagnifyingGlassIcon
          width={20}
          height={20}
          color={theme === 'dark' ? '#fff' : '#000'}
        />
      </div>

      <div className="btn">
        <Button onClick={handleOpenNewCategoryModal}>
          Cadastrar categoria
        </Button>
      </div>
    </Container>
  );
}
