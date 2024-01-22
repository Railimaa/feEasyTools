import {
  ArrowTopRightIcon,
  HeartFilledIcon,
  PersonIcon,
  ReaderIcon,
  SunIcon,
} from '@radix-ui/react-icons';
import { NavLink } from 'react-router-dom';

import { useTheme } from '../../contexts/useTheme';
import { UserMenu } from '../UserMenu';

import { Container } from './style';

export function SideBarItem() {
  const { theme } = useTheme();

  return (
    <Container theme={theme}>
      <div className="userOptions">
        <UserMenu />
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
