import Link from 'next/link'
import SvgLogo from '../components/logo';
import main from '../components/main.module.css';
import { Sun, Moon } from 'react-feather'

function Header(props) {
  return (
    <div className={main.header}>
      <div className={main.container}>
        <div className={main.headerContainer}>
          <Link href="/">
            <a className={`${main.mrauto}`} alt="Go to Homepage">
              <SvgLogo className={`${main.headerLogo}`} />
            </a>
          </Link>
          <div className={`${main.mlauto}`}>
            <button className={`${main.buttonHeader}`}>
              <Sun />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;