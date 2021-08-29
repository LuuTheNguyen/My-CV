import Head from "next/head";
import React from "react";

interface Props {
  name: string;
}

export const Layout: React.FC<Props> = ({ children, name }) => {
  return (
    <>
      <Head>
        <title>{name}</title>
        <meta name="description" content={name} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {children}
      <footer />
    </>
  );
};
