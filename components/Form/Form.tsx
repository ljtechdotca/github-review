import { ItemsContext, MessageContext } from "@lib/context";
import { FormEvent, useContext, useState } from "react";

export interface FormProps {}

export const Form = ({}: FormProps) => {
  const [user, setUser] = useState("");
  const { message, setMessage } = useContext(MessageContext);
  const { items, setItems } = useContext(ItemsContext);

  const fetchItems = async (event: FormEvent) => {
    event.preventDefault();
    setMessage("Fetching Data...");
    try {
      const response = await fetch(
        `/api/users?user=${encodeURIComponent(user)}`
      );
      const data = await response.json();
      const {
        message,
        payload: { items },
      } = data;
      setItems(items);
      setMessage(message);
    } catch (error) {
      console.error(error);
      setMessage("Server Error");
      setItems(null);
    }
  };

  return (
    <form onSubmit={fetchItems}>
      <input
        type="text"
        placeholder="user"
        onChange={(event) => setUser(event.target.value)}
      />
      <button>FETCH</button>
    </form>
  );
};
