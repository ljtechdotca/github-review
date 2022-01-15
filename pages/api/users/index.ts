import { Item } from "@types";
import type { NextApiRequest, NextApiResponse } from "next";

const TOKEN = process.env.GITHUB_TOKEN;

type Data = {
  status: boolean;
  message: string;
  payload: Record<string, any>;
};

const fetchGitHubUserItems = async (url: string) => {
  let itemsResult: Item[] = [];
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `token ${TOKEN}`,
      },
    });
    const data = await response.json();
    const { items }: { items: any[] } = data;
    itemsResult = items.map((item: any) => {
      return {
        id: item.id,
        createdAt: item.created_at,
        description: item.description,
        forks: item.forks,
        fullName: item.full_name,
        htmlUrl: item.html_url,
        language: item.language,
        languagesUrl: item.languages_url,
        name: item.name,
        openIssuesCount: item.open_issues_count,
        owner: {
          id: item.owner.id,
          avatarUrl: item.owner.avatar_url,
          login: item.owner.login,
        },
        pushedAt: item.pushed_at,
        size: item.size,
        stargazersCount: item.stargazers_count,
        updatedAt: item.updated_at,
        watchersCount: item.watchers_count,
      };
    });
  } catch (error) {
    console.error(error);
  }
  return { items: itemsResult };
};

export const githubHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const {
    method,
    query: { user },
  } = req;
  let data = { status: false, message: "Bad Method", payload: {} };
  const url = `https://api.github.com/search/repositories?q=user:${user}%2bis:public&page=1&per_page=10&sort=updated`;
  try {
    switch (method) {
      case "GET":
        let { items } = await fetchGitHubUserItems(url);

        data.status = true;
        data.message = "GET Method";
        data.payload = { items };

        res.status(200).json(data);
        break;
      default:
        res.status(400).json(data);
        break;
    }
  } catch (error) {
    res.status(500).json(data);
  }
};

export default githubHandler;
