import styles from "./ProjectHeader.module.css";
import { Status } from "../Status/Status";

export function ProjectHeader(props) {
  const simplifiedLink = props.link.replace(/^https?:\/\//, "");
  return (
    <>
      <a href="/project" class={`button-secondary ${styles.back_button}`}>
        Back to Projects
      </a>
      <div class={styles.another_wrapper}>
        <div class={styles.title_wrapper}>
          <div class={styles.title}>
            <div>{props.title}</div>
            <Status prog={props.prog} />
          </div>
          <a href={props.link}>{simplifiedLink}</a>
        </div>
        <p class={styles.summary}>{props.summary}</p>
      </div>
    </>
  );
}
