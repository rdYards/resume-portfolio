import styles from "./Status.module.css";

export function Status(props) {
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
  } else if (props.prog === "cancelled") {
    prog_banner = (
      <div class={`${styles.prog_banner} ${styles.canceled}`}>Cancelled</div>
    );
  } else if (props.prog === "complete") {
    prog_banner = (
      <div class={`${styles.prog_banner} ${styles.complete}`}>Complete</div>
    );
  } else if (props.prog === "updated") {
    prog_banner = (
      <div class={`${styles.prog_banner} ${styles.updated}`}>
        Recently Updated
      </div>
    );
  } else if (props.prog === "tbd") {
    prog_banner = (
      <div class={`${styles.prog_banner} ${styles.tbd}`}>To Be Determined</div>
    );
  } else {
    // Default case
    prog_banner = null;
  }

  return <>{prog_banner}</>;
}
