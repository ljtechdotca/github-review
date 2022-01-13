export interface Owner {
  id: string;
  avatarUrl: string;
  login: string;
}

export interface Item {
  id: string;
  createdAt: string;
  description: string;
  forks: number;
  fullName: string;
  htmlUrl: string;
  languagesUrl: string;
  name: string;
  openIssuesCount: number;
  owner: Owner;
  pushedAt: string;
  size: number;
  stargazersCount: number;
  updatedAt: string;
  watchersCount: number;
}

export interface Language {
  key: string;
  value: number;
}
