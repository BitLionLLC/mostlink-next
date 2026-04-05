import Head from 'next/head';
import { useEffect } from 'react';

import styles from './ParkingPage.module.css';

const DEFAULT_ORIGIN = 'https://www.mostlink.co';

export default function ParkingPage({ hostLabel }) {
  useEffect(() => {
    document.body.style.backgroundColor = '#0b1220';
    document.body.style.backgroundImage = 'none';
    return () => {
      document.body.style.backgroundColor = '';
      document.body.style.backgroundImage = '';
    };
  }, []);

  return (
    <div className={styles.wrap}>
      <Head>
        <title>Site unavailable · Mostlink</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta
          name="description"
          content="This Mostlink page is temporarily unavailable."
        />
      </Head>
      <div className={styles.card}>
        <h1 className={styles.title}>This page isn&apos;t available right now</h1>
        <p className={styles.lede}>
          The owner needs an active Mostlink subscription before visitors can view
          this site.
        </p>
        {hostLabel ? (
          <p className={styles.host}>{hostLabel}</p>
        ) : null}
        <p className={styles.cta}>
          Owner?{' '}
          <a href={`${DEFAULT_ORIGIN}/account`}>Sign in</a> to update billing, or{' '}
          <a href={`${DEFAULT_ORIGIN}/pricing`}>view pricing</a>.
        </p>
        <p className={styles.brand}>
          <a href={DEFAULT_ORIGIN}>Mostlink</a>
        </p>
      </div>
    </div>
  );
}
