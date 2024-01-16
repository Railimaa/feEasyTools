import {
  ArrowTopRightIcon,
  HeartFilledIcon,
  MoonIcon,
  PersonIcon,
  ReaderIcon,
  SunIcon,
} from '@radix-ui/react-icons';
import { NavLink } from 'react-router-dom';

import { ToggleThemeIcon } from '../../assets/Icons/ToggleThemeIcon';
import { useTheme } from '../../contexts/useTheme';
import { UserMenu } from '../UserMenu';

import { Container } from './style';

export function SideBarItem() {
  const { theme, handleToggleTheme } = useTheme();

  return (
    <Container theme={theme}>
      <div className="userOptions">
        <UserMenu />

        <button
          type="button"
          onClick={handleToggleTheme}
          className="toggleButton"
        >
          <div className="word">
            <MoonIcon width={20} height={20} />
            Tema Escuro
          </div>

          <ToggleThemeIcon dark={theme === 'dark'} />
        </button>
      </div>

      <NavLink to="/">
        YourFinances
        <ArrowTopRightIcon color="#5f3dc4" width={20} height={20} />
      </NavLink>
      <NavLink to="/contacts">
        Contacts
        <PersonIcon color="#5f3dc4" width={20} height={20} />
      </NavLink>
      <NavLink to="/task">
        Tarefas
        <ReaderIcon color="#5f3dc4" width={20} height={20} />
      </NavLink>
      <NavLink to="/clima">
        Clima
        <SunIcon color="#5f3dc4" width={20} height={20} />
      </NavLink>
      <NavLink to="/sobre">
        Sobre nós
        <HeartFilledIcon color="#5f3dc4" width={20} height={20} />
      </NavLink>
    </Container>
  );
}
