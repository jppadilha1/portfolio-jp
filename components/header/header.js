import styles from "./header.module.css";
import { useRef } from "react";

export function Header() {
  const menuRef = useRef(null);

  function toggleMenu() {
    const menu = menuRef.current;
    if (!menu) return;

    if (menu.style.opacity === "0" || menu.style.opacity === "") {
      menu.style.opacity = 1;
    } else {
      menu.style.opacity = 0;
    }
    menu.style.transition = "opacity 0.4s ease-out";
  }

  return (
    <>
      <div className={styles.header}>
        <div className={styles.options}>
          <div className={styles.logo}>
            <a href="#">
              <img src="/logo.png"></img>
            </a>
          </div>

          <div className={styles.menu} onClick={toggleMenu}>
            <div className={styles.childone}></div>
            <div className={styles.childtwo}></div>
          </div>
        </div>
        <div className={styles.menupopup} ref={menuRef}>
          <div className={styles.close}>
            <div className={styles.iconclose} onClick={toggleMenu}>
              <div className={styles.barx}></div>
              <div className={styles.barx}></div>
            </div>
          </div>

          <div className={styles.about}>
            <div className={styles.span}>
              <a href="#">Home</a>
            </div>
            <div className={styles.bar}></div>
          </div>

          <div className={styles.projects}>
            <div className={styles.span}>
              <a href="#projects">Projects</a>
            </div>
            <div className={styles.bar}></div>
          </div>

          <div className={styles.contact}>
            <div className={styles.span}>
              <a>Contact</a>
            </div>
            <div className={styles.bar}></div>
          </div>
        </div>
      </div>
    </>
  );
}
