import styles from "./Banner.module.css";

export function Banner(props) {
  let prog_banner;
  if (props.prog === "in-progress") {
    prog_banner = (
      <div class={`${styles.prog_banner} ${styles.inprogress}`}>
        In Progress
      </div>
    );
  } else if (props.prog === "paused") {
    prog_banner = (
      <div class={`${styles.prog_banner} ${styles.paused}`}>Paused</div>
    );
  } else if (props.prog === "canceled") {
    prog_banner = (
      <div class={`${styles.prog_banner} ${styles.canceled}`}>Canceled</div>
    );
  } else if (props.prog === "complete") {
    prog_banner = (
      <div class={`${styles.prog_banner} ${styles.complete}`}>Complete</div>
    );
  } else {
    // Default case
    prog_banner = null;
  }

  return (
    <div class={styles.banner_wrapper}>
      {prog_banner}
      <a
        href={props.href}
        target="_blank"
        class={`${styles.resource} ${styles[`${props.mode}-mode`]}`}
      >
        <div class={styles.content}>
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </div>
      </a>
    </div>
  );
}
