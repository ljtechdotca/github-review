import { Item } from "@types";
import { createContext, Dispatch } from "react";

export const ItemsContext = createContext<{
  items: Item[] | null;
  setItems: Dispatch<Item[] | null>;
}>({
  items: [],
  setItems: () => {},
});
