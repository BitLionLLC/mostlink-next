import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mostlink | Link page builder</title>
        <meta name="description" content="Mostlink | Link page builder" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Mostlink!
        </h1>
      </main>

      <footer className={styles.footer}>
          Powered by BitLion
      </footer>
    </div>
  );
}
