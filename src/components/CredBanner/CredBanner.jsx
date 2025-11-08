import styles from "./CredBanner.module.css";

export function CredBanner(props) {
  return (
    <div
      id={props.title.toLowerCase().replace(/ /g, "_")}
      class={styles.cred_banner_wrapper}
    >
      <div class={styles.image_container}>
        {props.image && (
          <img
            class={styles.image}
            src={props.image}
            />
        )}
      </div>
      <div class={`${styles.content} ${styles[`${props.mode}-mode`]}`}>
        <h2>{props.title}</h2>

        {/* Only display verify_code if it exists */}
        {props.verify_code && (
          <p>
            <strong>Verify Code:</strong> {props.verify_code}
          </p>
        )}

        <p>
          <strong>Date:</strong> {props.active_date}
        </p>
      </div>
    </div>
  );
}
