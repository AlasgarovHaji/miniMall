import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./header.module.css";
function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <NavLink to="/">MiniMall</NavLink>
      </div>
      <div className={styles.nav}>
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? styles.active : undefined)}
        >
          Ana Səhifə
        </NavLink>
        <NavLink
          to="/shop"
          className={({ isActive }) => (isActive ? styles.active : undefined)}
        >
          Mağazalar
        </NavLink>
        <NavLink
          to="/restaurant"
          className={({ isActive }) => (isActive ? styles.active : undefined)}
        >
          Restoranlar
        </NavLink>
        <NavLink
          to="/map"
          className={({ isActive }) => (isActive ? styles.active : undefined)}
        >
          Xəritə
        </NavLink>
        <NavLink
          to="/rent"
          className={({ isActive }) => (isActive ? styles.active : undefined)}
        >
          İcarə
        </NavLink>
      </div>
    </header>
  );
}
export default Header;