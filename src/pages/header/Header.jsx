import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./header.module.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <NavLink to="/" className={styles.logoText}>
          MiniMall
        </NavLink>
      </div>
      <div className={`${styles.nav} ${isMenuOpen ? styles.open : ""}`}>
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          Ana Səhifə
        </NavLink>
        <NavLink
          to="/shop"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          Mağazalar
        </NavLink>
        <NavLink
          to="/restaurant"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          Restoranlar
        </NavLink>
        <NavLink
          to="/map"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          Xəritə
        </NavLink>
        <NavLink
          to="/rent"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          İcarə
        </NavLink>
      </div>
      <button onClick={toggleMenu} className={styles.menuButton}>
        <span className={styles.menuIcon}></span>
      </button>
    </header>
  );
}

export default Header;
