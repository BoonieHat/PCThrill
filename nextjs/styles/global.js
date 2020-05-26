import css from 'styled-jsx/css'

export default css.global`
  body {
    margin: 0px;
    font-family: "Inter", sans-serif;
  }
  h1, h2, h3, h4, h5 {
    margin: 0;
  }
  ::-moz-selection { /* Code for Firefox */
  color: white;
  background: #33e2c5;
  }

  ::selection {
    color: white;
    background: #33e2c5;
  }
`