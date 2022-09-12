import styles from "../styles/Cover.module.scss";
import { AppMeta } from "newt-client-js";

export function Cover({ app }: { app: AppMeta }) {
  return (
    <div
      className={styles.Cover}
      style={{ backgroundImage: `url(${app.cover.value})` }}>
      &nbsp;
    </div>
  );
}
