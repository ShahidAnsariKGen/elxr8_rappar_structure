import Head from 'next/head';
import React from 'react';

interface PageDetailsProps {
  title: string;
  description: string;
}

export default function PageDetails({ title, description }: PageDetailsProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
