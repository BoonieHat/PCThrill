import SvgLogo from '../logo';

function footer(props) {
  return (
    <footer className="footer">
      <div className="socialmedia">
        <a href="https://twitter.com/PcThrill">Twitter</a>
        <a href="https://www.instagram.com/pcthrill/">Instagram</a>
        <a href="https://www.pinterest.com/pcthrill/">Pinterest</a>
        <a href="https://www.reddit.com/user/pcthrill">Reddit</a>
      </div>

        <div className="policy">
        Google
        <a href="https://policies.google.com/privacy">Privacy Policy</a>
        and
        <a href="https://policies.google.com/terms">Terms of Service</a>
        apply.
      </div>

      <SvgLogo className="footerLogo" />

      <div className="copyright">© 2020 PC Thrill</div>
      
    </footer>
  )
}

export default footer;