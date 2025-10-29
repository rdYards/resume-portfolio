import { TimelineItem } from "./TimelineItem";
import styles from "./Timeline.module.css";

export function Timeline(props) {
  return (
    <div class={styles.timeline_container}>
      <svg xmlns="http://www.w3.org/2000/svg" class={styles.vertical_line}>
        <line x1="50%" y1="0" x2="50%" y2="100%"/>
      </svg>

      {props.data.map((item, index) => (
        <TimelineItem
          href={item.href}
          key={index}
          mode={props.mode}
          icon={item.icon}
          title={item.title}
          timeline={item.timeline}
          location={item.location}
          summary={item.summary}
          skills={item.skills}
        />
      ))}
    </div>
  );
}
