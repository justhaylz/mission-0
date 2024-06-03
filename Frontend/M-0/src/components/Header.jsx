import styles from '../components/Header.module.css';
import Logo from '../assets/spellingTree.png';

function Header() {
    return (
        <>
        <div className={styles.container}>
        <img className={styles.logo} src={Logo} alt="logo-img" />
        </div>
        </>
    )
}

export default Header