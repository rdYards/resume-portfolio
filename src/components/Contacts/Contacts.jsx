import styles from "./Contacts.module.css";

export function Contacts() {
  return (
    <div class={styles.contacts}>
      <a href="https://github.com/rdYards" target="_blank">
        <object
          class={styles.icon}
          type="image/svg+xml"
          data="src/assets/github-logo.svg"
        ></object>
      </a>
      <a href="mailto:rdyards@protonmail.com" target="_blank">
        <object
          class={styles.icon}
          type="image/svg+xml"
          data="src/assets/mail-send-line.svg"
        ></object>
      </a>
      <a href="https://www.linkedin.com/in/rdyards/" target="_blank">
        <object
          class={styles.icon}
          type="image/svg+xml"
          data="src/assets/in_icon.svg"
        ></object>
      </a>
      <a
        class={styles.resume}
        href="/aeastman_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume
      </a>
    </div>
  );
}
