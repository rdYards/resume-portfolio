import styles from "./Contacts.module.css";

import githubLogo from "src/assets/github-logo.svg";
import mailSendLine from "src/assets/mail-send-line.svg";
import inIcon from "src/assets/in_icon.svg";

export function Contacts() {
  return (
    <div class={styles.contacts}>
      <a
        href="https://github.com/rdYards"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img class={styles.icon} src={githubLogo} />
      </a>
      <a
        href="mailto:rdyards@protonmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img class={styles.icon} src={mailSendLine} />
      </a>
      <a
        href="https://www.linkedin.com/in/rdyards/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img class={styles.icon} src={inIcon} />
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
