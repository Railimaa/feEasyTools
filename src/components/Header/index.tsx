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
        <div className="nameLogo">
          <h2>Easy</h2>
          <span>Tools</span>
        </div>
        <GearIcon width={24} height={24} color="#5F3DC4" />
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

        <div className="hide">
          <NavLink id="headerLink" to="/">
            Clima
          </NavLink>
          <NavLink id="headerLink" to="/">
            Sobre
          </NavLink>
          <UserMenu />
        </div>
      </div>

      <div className="toogle">
        <button type="button" onClick={handleToogleSideBar}>
          {!sideBarOpen && (
            <HamburgerMenuIcon width={28} height={28} color="#5F3DC4" />
          )}

          {sideBarOpen && <Cross2Icon width={28} height={28} color="#5F3DC4" />}
        </button>
      </div>

      <SideBar open={sideBarOpen} />
    </HeaderC>
  );
}
