import styles from "./header.module.css";

export function Header() {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.options}>
          <div className={styles.about}>
            <div className={styles.span}>About</div>
            <div className={styles.bar}></div>
          </div>

          <div className={styles.projects}>
            <div className={styles.span}>Projects</div>
            <div className={styles.bar}></div>
          </div>

          <div className={styles.contact}>
            <div className={styles.span}>Contact</div>
            <div className={styles.bar}></div>
          </div>
        </div>
      </div>
    </>
  );
}
