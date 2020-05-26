import Link from 'next/link'
import styles from '../components/header.module.css';

function Header(props) {
  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        <button className={`${styles.buttonHeader} ${styles.mrauto}`}>
          <Link href="/">
            <a>PC Thrill</a>
          </Link>
        </button>
      </div>
    </div>
  )
}

export default Header;