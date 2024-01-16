import { GearIcon, HamburgerMenuIcon } from '@radix-ui/react-icons';
import { useState } from 'react';

import { useTheme } from '../../contexts/useTheme';
import { SideBar } from '../SideBar';
import { UserMenu } from '../UserMenu';

import { HeaderC } from './style';

export function Header() {
  const { theme } = useTheme();

  const [sideBarOpen, setSideBarOpen] = useState(false);

  function handleToogleSideBar() {
    setSideBarOpen((prevState) => !prevState);
  }

  function handleCloseSideBar() {
    setSideBarOpen(false);
  }

  return (
    <HeaderC theme={theme}>
      <div className="content">
        <div className="logo">
          <h2>easytools</h2>
          <GearIcon width={20} height={20} color="#5F3DC4" />
        </div>

        <div className="actions">
          <UserMenu />

          <button type="button" onClick={handleToogleSideBar}>
            <HamburgerMenuIcon width={28} height={28} color="#5F3DC4" />
          </button>
        </div>
      </div>

      <SideBar open={sideBarOpen} handleCloseSideBar={handleCloseSideBar} />
    </HeaderC>
  );
}
