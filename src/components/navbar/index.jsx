import {
  HamburgerIcon,
  HamburgerIconClose,
  ThemeIconLight,
  ThemeIconDark,
} from "assets/icons";
import { NavbarItems } from "constants/NavbarConst";
import { AppContext, useContext } from "context/AppContext";
import { useState } from "react";
import "./navbar.scss";

export default function Navbar() {
  const [navbarMenu, setNavbarMenu] = useState(false);
  const { setTheme, theme } = useContext(AppContext);
  return (
    <div className="navbar bg-secondary">
      <div className="navbar-container container">
        <h1 className="txt-white">Kadir.</h1>
        <ul className="navbar-menu">
          {NavbarItems.map((item, index) => (
            <li key={index}>
              <a href={item.href} key={index} className="txt-white">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="navbar-icons">
          {theme === "light" ? (
            <ThemeIconDark
              className="theme-button icon-primary"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            />
          ) : (
            <ThemeIconLight
              className="theme-button icon-primary"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            />
          )}

          {navbarMenu ? (
            <HamburgerIconClose className="icon-white" />
          ) : (
            <HamburgerIcon
              className="navbar-toggle icon-white "
              onClick={() => setNavbarMenu(!navbarMenu)}
            />
          )}
        </div>
        {/* menu for mobile */}
        <div
          className="sidebar"
          onClick={() => setNavbarMenu(false)}
          style={navbarMenu ? { display: "block" } : { display: "none" }}
        >
          <ul className="sidebar-content">
            {NavbarItems.map((item, index) => (
              <li key={index}>
                <a href={item.href} key={index} className="txt-white">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
