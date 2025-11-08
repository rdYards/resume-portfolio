import styles from "./Contacts.module.css";

export function Contacts() {
  return (
    <div class={styles.contacts}>
      <a href="https://github.com/rdYards" target="_blank" rel="noopener noreferrer">
        <img
          class={styles.icon}
          src="src/assets/github-logo.svg"
          />
      </a>
      <a href="mailto:rdyards@protonmail.com" target="_blank" rel="noopener noreferrer">
        <img
          class={styles.icon}
          src="src/assets/mail-send-line.svg"
          />
      </a>
      <a href="https://www.linkedin.com/in/rdyards/" target="_blank" rel="noopener noreferrer">
        <img
          class={styles.icon}
          src="src/assets/in_icon.svg"
          />
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
