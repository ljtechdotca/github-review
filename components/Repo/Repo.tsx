import { Icon, Languages, User } from "@components";
import { Item } from "@types";
import styles from "./Repo.module.scss";

export interface RepoProps {
  item: Item;
}

export const Repo = ({ item }: RepoProps) => {
  return (
    <a
      key={item.id}
      href={item.htmlUrl}
      className={styles.root}
      target="_blank"
      rel="noreferrer"
    >
      <div className={styles.container}>
        <div className={styles.cell}>
          <Icon type="fork" width={16} height={16} />
          <span>{item.forks}</span>
        </div>
        <div className={styles.cell}>
          <Icon type="star" width={16} height={16} />
          <span>{item.stargazersCount}</span>
        </div>
        <div className={styles.cell}>
          <Icon type="watcher" width={16} height={16} />
          <span>{item.watchersCount}</span>
        </div>
        <div className={styles.cell}>
          <Icon type="issue" width={16} height={16} />
          <span>{item.openIssuesCount}</span>
        </div>
        <div className={styles.cell}>
          <span>{item.size}kB</span>
        </div>
      </div>
      <div className={styles.container}>
        <time className={styles.time} dateTime={item.createdAt}>
          <div>CREATED:</div>
          {new Date(item.createdAt).toLocaleString()}
        </time>
        <time className={styles.time} dateTime={item.pushedAt}>
          <div>PUSHED:</div>
          {new Date(item.pushedAt).toLocaleString()}
        </time>
        <time className={styles.time} dateTime={item.updatedAt}>
          <div>UPDATED:</div>
          {new Date(item.updatedAt).toLocaleString()}
        </time>
      </div>
      <Languages url={item.languagesUrl} />
      <User owner={item.owner} />
      <div className={styles.contents}>
        <h3>{item.name}</h3>
        <h4>{item.fullName}</h4>
        <p>{item.description}</p>
      </div>
    </a>
  );
};
