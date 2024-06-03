import styles from '../pages/Home.module.css';
import Header from '../components/Header';
import GameCard from '../components/GameCard';
// import Footer from '../components/Footer';

function Home() {

  return (
    <>
    <div className={styles.container}>
      <div className={styles.header}>
        <Header /></div>
      {/* <div className={styles.gameCard}>
        <GameCard /> */}
      {/* </div> */}
      {/* <div className={styles.footer}>
      {/* <Footer />  */}
      {/* </div> */}
    </div>
    </>
  )
}

export default Home