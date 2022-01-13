import { createContext, Dispatch } from "react";

export const MessageContext = createContext<{
  message: string | null;
  setMessage: Dispatch<string | null>;
}>({
  message: null,
  setMessage: () => {},
});
