"use client";
import React, { useState } from "react";
import styles from "../styles/Header.module.scss";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header
      className={`${styles.header} ${isMenuOpen ? styles.border_none : ""}`}
    >
      <div className={styles.container}>
        <img src="assets/logo.svg" alt="coin" />
        <div className={styles.links}>
          <a href="#">Chrome Extension</a>
          <a href="#">Price Comparison</a>
          <a href="#">Blog</a>
        </div>
        <img
          className={styles.menu_logo}
          src={isMenuOpen ? "/assets/close.svg" : "/assets/menu.svg"}
          alt="menu"
          onClick={toggleMenu}
        />{" "}
        {isMenuOpen && (
          <div className={styles.open_menu}>
            <div className={styles.links_open}>
              <a href="#">Chrome Extension</a>
              <a href="#">Price Comparison</a>
              <a href="#">Blog</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
