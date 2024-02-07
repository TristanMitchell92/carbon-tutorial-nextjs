'use client';
import LandingPage from './home/page';

import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <LandingPage />;
    </main>
  );
}
