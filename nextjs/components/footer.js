import Link from 'next/link'
import main from '../components/main.module.css';
import SvgLogo from '../components/logo';


function footer(props) {
  return (
    <footer className={main.container}>
      <div className={main.footer}>
        <div className={main.socialmedia}>
          <a href="">Twitter</a>
          <a href="">Instagram</a>
          <a href="">Pinterest</a>
          <a href="">Reddit</a>
        </div>
        <div className={main.policy}>
          Google
          <a href="https://policies.google.com/privacy">Privacy Policy</a>
          and
          <a href="https://policies.google.com/terms">Terms of Service</a>
          apply.
        </div>
        <SvgLogo className={`${main.footerLogo}`} />
        <div className={main.copyright}>© 2020 PC Thrill</div>
      </div>
    </footer>
  )
}

export default footer;