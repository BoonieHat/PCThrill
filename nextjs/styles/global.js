import css from 'styled-jsx/css'

export default css.global`
  body {
    margin: 0px;
    font-family: "Inter", sans-serif;
  }
  h1, h2, h3, h4, h5 {
    font-family: 'Playfair Display', serif;
    font-weight: 900;
    margin: 0;
  }
  ::-moz-selection { /* Code for Firefox */
    color: white;
    background: black;
  }

  ::selection {
    color: white;
    background: black;
  }
`