import { MoonIcon, SunIcon } from '@radix-ui/react-icons';

import { useTheme } from '../../contexts/useTheme';
import { DropdownMenu } from '../DropdownMenu';

import { Container } from './style';

export function SwitchTheme() {
  const { theme, handleToggleTheme } = useTheme();

  return (
    <DropdownMenu.Root>
      <Container>
        <DropdownMenu.Trigger>
          {theme === 'dark' && <MoonIcon width={20} height={20} color="#fff" />}

          {theme === 'light' && <SunIcon width={20} height={20} color="#000" />}
        </DropdownMenu.Trigger>

        <DropdownMenu.Content>
          <DropdownMenu.Item
            onSelect={() => handleToggleTheme('dark')}
            style={{ gap: '10px' }}
          >
            Tema escuro
            <MoonIcon
              width={20}
              height={20}
              color={theme === 'dark' ? '#fff' : '#000'}
            />
          </DropdownMenu.Item>

          <DropdownMenu.Item
            onSelect={() => handleToggleTheme('light')}
            style={{ gap: '10px' }}
          >
            Tema claro
            <SunIcon
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
