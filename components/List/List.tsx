import { Repo } from "@components";
import { Item } from "@types";
import styles from "./List.module.scss";

export interface ListProps {
  items: Item[];
}

export const List = ({ items }: ListProps) => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        {items.map((item) => (
          <Repo key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
