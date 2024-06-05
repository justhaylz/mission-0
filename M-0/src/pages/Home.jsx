/** @format */
import styles from "../pages/Home.module.css";
import SpellingTree from "../components/SpellingTree";

function Home() {
  return (
    <>
      <div className={styles.container}>
        <SpellingTree />
      </div>
    </>
  );
}

export default Home;
