import { Alert, Form, List, Meta } from "@components";
import { ItemsContext, MessageContext } from "@lib/context";
import styles from "@styles/Home.module.scss";
import type { NextPage } from "next";
import { useContext } from "react";

const Home: NextPage = () => {
  const { items, setItems } = useContext(ItemsContext);
  const { message, setMessage } = useContext(MessageContext);

  return (
    <div className={styles.root}>
      <Meta
        title="GitHub Review"
        description="Review Github users via their 10 previous repositories."
      />
      <div className={styles.container}>
        <h1>GitHub Review</h1>
        <p>Search via GitHub user and find their 10 most recent repositories</p>
        <Form />
      </div>
      <div className={styles.container}>
        {items ? <List items={items} /> : <Alert message={message} />}
      </div>
    </div>
  );
};

export default Home;
