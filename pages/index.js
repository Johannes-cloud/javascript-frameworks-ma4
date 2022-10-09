import Head from "next/head";
import Nav from "../components/Nav";
import styles from "../styles/Home.module.css";

export default function Home({ articles }) {
  return (
    <main className={styles.main}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav></Nav>
      <h1>Drinks For All(Adults)</h1>
    </main>
  );
}
