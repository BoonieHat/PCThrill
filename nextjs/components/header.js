import Link from 'next/link'
import SvgLogo from '../components/logo';
import main from '../components/main.module.css';

function Header(props) {
  return (
    <div className={main.header}>
      <div className={main.container}>
        <div className={main.headerContainer}>
          <Link href="/">
            <a className={`${main.mrauto}`}>
              <SvgLogo className={`${main.headerLogo}`} />
            </a>
          </Link>
          <div className={`${main.mlauto}`}>
            <button className={`${main.buttonHeader}`}>
              <Link href="/">
                <a>Subscribe</a>
              </Link>
            </button>
            <button className={`${main.buttonHeader}`}>
              <Link href="/">
                <a>About</a>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;