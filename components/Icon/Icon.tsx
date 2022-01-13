import styles from "./Icon.module.scss";

export interface IconProps {
}
  
export const Icon = ({}: IconProps) => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        todo: new component Icon
      </div>
    </div>
  );
}