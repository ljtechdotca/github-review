import { TOKEN } from "@lib/constants";
import { Language } from "@types";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  status: boolean;
  message: string;
  payload: Record<string, any>;
};

const fetchGitHubLanguages = async (url: string) => {
  let bytesResult: number = 0;
  let languagesResult: Language[] = [];
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `token ${TOKEN}`,
      },
    });
    const data = await response.json();
    languagesResult = Object.entries(data).map(([key, value]) => {
      bytesResult += value as number;
      return {
        key,
        value: value as number,
      };
    });
  } catch (error) {
    console.error(error);
  }
  return { bytes: bytesResult, languages: languagesResult };
};

export const githubHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const {
    method,
    query: { url },
  } = req;
  let data = { status: false, message: "Bad Method", payload: {} };
  try {
    switch (method) {
      case "GET":
        let { bytes, languages } = await fetchGitHubLanguages(`${url}`);

        data.status = true;
        data.message = "GET Method";
        data.payload = { bytes, languages };

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
