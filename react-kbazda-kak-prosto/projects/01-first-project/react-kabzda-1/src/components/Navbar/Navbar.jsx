import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";

const SelectedLink = () => {
  return (navData) => (navData.isActive ? s.active : s.item);
};

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div>
        <NavLink to="/profile" className={SelectedLink()}>
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink to="/dialogs" className={SelectedLink()}>
          Messages
        </NavLink>
      </div>
      <div>
        <NavLink to="/news" className={SelectedLink()}>
          News
        </NavLink>
      </div>
      <div>
        <NavLink to="/music" className={SelectedLink()}>
          Music
        </NavLink>
      </div>
      <div>
        <NavLink to="/settings" className={SelectedLink()}>
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
