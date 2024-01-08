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

  function handleCloseSideBar() {
    setSideBarOpen(false);
  }

  return (
    <HeaderC>
      <div className="logo">
        <h2>easytools</h2>
        <GearIcon width={20} height={20} color="#5F3DC4" />
      </div>

      <div className="content">
        <NavLink className="navLink" to="/">
          YourFinances
        </NavLink>
        <NavLink className="navLink" to="/contacts">
          Contacts
        </NavLink>
        <NavLink className="navLink" to="/task">
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

      <SideBar open={sideBarOpen} handleCloseSideBar={handleCloseSideBar} />
    </HeaderC>
  );
}
