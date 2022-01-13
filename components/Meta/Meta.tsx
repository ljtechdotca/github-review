import Head from "next/head";

export interface MetaProps {
  title: string;
  description: string;
}

export const Meta = ({ title, description }: MetaProps) => {
  return (
    <Head>
      <title>GitHub Review</title>
      <meta
        name="description"
        content={description}
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};
