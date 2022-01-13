import { Alert, Form, List } from "@components";
import { ItemsContext, MessageContext } from "@lib/context";
import { objectEntries } from "@lib/helpers";
import styles from "@styles/Home.module.scss";
import type { NextPage } from "next";
import { useContext, useState } from "react";

const Home: NextPage = () => {
  const { items, setItems } = useContext(ItemsContext);
  const { message, setMessage } = useContext(MessageContext);

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <h1>Github Review</h1>
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
