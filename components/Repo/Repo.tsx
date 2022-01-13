import { Languages, User } from "@components";
import ForkIcon from "@public/fork.svg";
import IssueIcon from "@public/issue.svg";
import StarIcon from "@public/star.svg";
import WatcherIcon from "@public/watcher.svg";
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
          <ForkIcon width={16} height={16} />
          <span>{item.forks}</span>
        </div>
        <div className={styles.cell}>
          <StarIcon width={16} height={16} />
          <span>{item.stargazersCount}</span>
        </div>
        <div className={styles.cell}>
          <WatcherIcon width={16} height={16} />
          <span>{item.watchersCount}</span>
        </div>
        <div className={styles.cell}>
          <IssueIcon width={16} height={16} />
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
