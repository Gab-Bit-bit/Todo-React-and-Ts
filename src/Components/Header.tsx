import React from "react";
import styles from "./Header.module.css"

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1>React + Ts Todo</h1>
    </header>
  );
};

export default Header;
