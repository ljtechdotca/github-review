import styles from "./Alert.module.scss";

export interface AlertProps {
  message: string | null;
}

export const Alert = ({ message }: AlertProps) => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>{message ? message : "👍"}</div>
    </div>
  );
};
