import styles from "./Timeline.module.css";

export function TimelineItem(props) {
  return (
    <a href={props.href} class={styles.timeline_item}>
      {/* Company Icon */}
      {props.icon && (
        <img
          class={styles.icon}
          src={props.icon}
        />
      )}

      {/* Content section */}
      <div class={styles.content}>
        <h3>{props.title}</h3>
        <p class={styles.subtitle}>{props.location}</p>
        <p class={styles.subtitle}>{props.timeline}</p>
        <p>{props.summary}</p>
        <div class={styles.skills}>
          {props.skills && props.skills.map((skill, index) => (
            <span key={index} class={styles.skill}>{skill}</span>
          ))}
        </div>
      </div>
    </a>
  );
}