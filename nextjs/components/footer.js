import Link from 'next/link'
import footercss from '../components/footer.module.css';
import main from '../components/main.module.css';
function footer(props) {
  return (
    <footer className={main.container}>
      <div className={footercss.socialmedia}>
        <a href="">Twitter</a>
        <a href="">Instagram</a>
        <a href="">Pinterest</a>
        <a href="">Reddit</a>
      </div>
      <div className={footercss.policy}>
        Google
        <a href="https://policies.google.com/privacy">Privacy Policy</a>
        and
        <a href="https://policies.google.com/terms">Terms of Service</a>
        apply.
      </div>
      <div className={footercss.copyright}>
        © 2020 PC Thrill
      </div>
    </footer>
  )
}

export default footer;