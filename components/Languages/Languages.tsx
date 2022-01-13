import { COLORS } from "@lib/constants";
import { MessageContext } from "@lib/context";
import { Language } from "@types";
import { useCallback, useContext, useEffect, useState } from "react";
import styles from "./Languages.module.scss";

export interface LanguagesProps {
  url: string;
}

export const Languages = ({ url }: LanguagesProps) => {
  const [languages, setLanguages] = useState<Language[]>([]);
  const [bytes, setBytes] = useState<number | null>(null);
  const { message, setMessage } = useContext(MessageContext);

  const fetchLanguages = useCallback(async () => {
    let bytesResult: number | null = null;
    let languagesResult: Language[] = [];
    try {
      const response = await fetch(`/api/languages?url=${url}`);
      const data = await response.json();
      const {
        payload: { bytes, languages },
      } = data;
      bytesResult = bytes > 0 ? bytes : null;
      languagesResult = languages;
    } catch (error) {
      console.error(error);
      setMessage("Server Error");
    }
    setBytes(bytesResult);
    setLanguages(languagesResult);
  }, [setMessage, url]);

  useEffect(() => {
    (async () => await fetchLanguages())();
  }, [fetchLanguages, url]);

  return (
    <div className={styles.root}>
      {bytes && (
        <div className={styles.container}>
          {languages.map((item) => (
            <div
              key={item.key}
              className={styles.item}
              style={{
                backgroundColor: COLORS[item.key].color,
                width: `${(item.value / bytes) * 100}%`,
              }}
            >
              <div className={styles.tooltip}>{item.key}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
