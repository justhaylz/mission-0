import styles from '../components/GameCard.module.css';


function GameCard() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.gameCard}>
                    <form>
                        <input 
                        type='text'
                        id={styles.input}>Type Here...</input>
                        <div className={styles.btns}>
                            <button className={styles.btn1}>Generate Word</button> <br />
                            <button className={styles.btn2}>Speak</button>
                            <button className={styles.btn3}>Submit</button>
                            <button className={styles.btn4}>Level</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default GameCard