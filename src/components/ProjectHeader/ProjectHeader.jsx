import styles from "./ProjectHeader.module.css";
import { Status } from "../Status/Status";
import { SkillsBanner } from "../SkillsBanner";

export function ProjectHeader(props) {
  const simplifiedLink = props.link.replace(/^https?:\/\//, "");
  return (
    <>
      <a href="/resume/project" class={`button-secondary ${styles.back_button}`}>
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
        <div class={styles.summary}>{props.summary}</div>
      </div>
      <SkillsBanner skills={props.skills} />
    </>
  );
}
