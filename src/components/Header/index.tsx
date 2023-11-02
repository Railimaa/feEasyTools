import { Cross2Icon, GearIcon, HamburgerMenuIcon } from '@radix-ui/react-icons';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { SideBar } from '../SideBar';
import { UserMenu } from '../UserMenu';

import { HeaderC } from './style';

export function Header() {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  function handleToogleSideBar() {
    setSideBarOpen((prevState) => !prevState);
  }

  return (
    <HeaderC>
      <div className="logo">
        <GearIcon width={24} height={24} color="#5F3DC4" />
        <h2>easytools</h2>
      </div>

      <div className="content">
        <NavLink id="headerLink" to="/">
          YourFinances
        </NavLink>
        <NavLink id="headerLink" to="/contacts">
          Contacts
        </NavLink>
        <NavLink id="headerLink" to="/task">
          Tarefas
        </NavLink>
      </div>

      <div className="toogle">
        <div className="userMenu">
          <UserMenu />
        </div>

        <button type="button" onClick={handleToogleSideBar}>
          {!sideBarOpen && (
            <HamburgerMenuIcon width={28} height={28} color="#5F3DC4" />
          )}

          {sideBarOpen && <Cross2Icon width={28} height={28} color="#5F3DC4" />}
        </button>
      </div>

      <SideBar open={sideBarOpen} handleCloseSideBar={handleToogleSideBar} />
    </HeaderC>
  );
}
