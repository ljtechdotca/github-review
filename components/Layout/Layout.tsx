import { Footer, Header, Meta } from "@components";
import { ItemsContext, MessageContext } from "@lib/context";
import { Item } from "@types";
import { useState } from "react";
import styles from "./Layout.module.scss";

export interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const [message, setMessage] = useState<string | null>(null);
  const [items, setItems] = useState<Item[] | null>(null);

  return (
    <ItemsContext.Provider value={{ items, setItems }}>
      <MessageContext.Provider value={{ message, setMessage }}>
        <div className={styles.root}>
          <Meta
            title="GitHub Review"
            description="Find what languages you use most with this GitHub Review tool."
          />
          <Header />
          <main className={styles.container}>{children}</main>
          <Footer />
        </div>
      </MessageContext.Provider>
    </ItemsContext.Provider>
  );
};
