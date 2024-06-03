import './Header.modules.css'
import Logo from '../src/spellingTree.png'

function Header() {
    return (
        <>
        <div>
        <img className={styles.logo} src={Logo} alt="logo-image" />
        </div>
        </>
    )
}

export default Header