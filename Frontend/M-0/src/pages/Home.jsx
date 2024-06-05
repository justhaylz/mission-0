/** @format */
import styles from "../pages/Home.module.css";
import GameCard from "../components/GameCard";

function Home() {
  return (
    <>
      <div className={styles.container}>
        <GameCard />
      </div>
    </>
  );
}

export default Home;
