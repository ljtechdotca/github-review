import { Owner } from "@types";
import Image from "next/image";
import styles from "./User.module.scss";

export interface UserProps {
  owner: Owner;
}

export const User = ({ owner }: UserProps) => {
  return (
    <div className={styles.root}>
      <div className={styles.avatar}>
        <Image alt={owner.id} src={owner.avatarUrl} width={48} height={48} />
      </div>
      <div className={styles.container}>
        <h2>/{owner.login}</h2>
      </div>
    </div>
  );
};
