import { Icon } from "@components";
import { SOCIALS } from "@lib/constants";
import styles from "./Footer.module.scss";

export interface FooterProps {}

export const Footer = ({}: FooterProps) => {
  return (
    <footer className={styles.root}>
      <div className={styles.container}>
        <p>find more ljtech:</p>
        <div className={styles.contents}>
          {SOCIALS.map((item) => (
            <a className={styles.item} key={item.host} href={item.href}>
              <Icon type={item.host} width={32} height={32} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
