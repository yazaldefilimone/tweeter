import { Header } from '@/components/Header';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tweeter</title>
      </Head>
      <Header />
      <main></main>
      <footer></footer>
    </div>
  );
}
