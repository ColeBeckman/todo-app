import Head from 'next/head';
import Card from '../components/Card';
import styles from './styles.module.css';
import React from 'react';
import Header from '@/components/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main className={styles.wrapper}>
        <Card name='To Do:' />
      </main>
    </>
  );
}
