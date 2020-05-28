import { initGA, logPageView } from '../utils/analytics'

import HtmlHead from "../components/head";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";


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
        <HtmlHead 
          title={this.props.headTitle} 
          description={this.props.headDesc}
          image={this.props.headImage}
        />
        <Header />
        { this.props.children }
        <Footer />
      </>
    )
  }
}