import { initGA, logPageView } from '../utils/analytics'
import globalStyles from '../styles/global.js';


export default class Layout extends React.Component {
  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }
  render() {
    return (
      <>
        <style jsx global>{globalStyles}</style>
        { this.props.children }
      </>
    )
  }
}