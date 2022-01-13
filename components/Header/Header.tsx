import styles from "./Header.module.scss";

export interface HeaderProps {}

export const Header = ({}: HeaderProps) => {
  return (
    <header className={styles.root}>
      <div className={styles.container}>todo: new component Header</div>
    </header>
  );
};
