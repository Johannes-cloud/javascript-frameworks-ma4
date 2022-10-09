import CocktailsList from "../components/CocktailsList";
import Nav from "../components/Nav";
import styles from "../styles/Home.module.css";

export default function Home({ cocktails }) {
  return (
    <main className={styles.main}>
      <Nav></Nav>
      <h1>Results</h1>
      <div>
        <CocktailsList cocktails={cocktails} />
      </div>
    </main>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`
  );
  const cocktails = await res.json();

  return {
    props: {
      cocktails,
    },
  };
};
