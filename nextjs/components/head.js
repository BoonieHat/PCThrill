import Head from 'next/head'

export default (props) => (
  <Head>
    <title>{props.title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
    <meta name="description" content={props.description}></meta>

    <meta name="msapplication-TileColor" content="#da532c"></meta>
    <meta name="theme-color" content="#ffffff"></meta>

    <meta property="og:type" content="website"></meta>
    <meta property="og:url" content="https://pcthrill.com/"></meta>
    <meta property="og:title" content={props.title}></meta>
    <meta property="og:description" content={props.description}></meta>
    <meta property="og:image" content={props.image}></meta>

    <meta property="twitter:card" content="summary_large_image"></meta>
    <meta property="twitter:url" content="https://pcthrill.com/"></meta>
    <meta property="twitter:title" content={props.title}></meta>
    <meta property="twitter:description" content={props.description}></meta>
    <meta property="twitter:image" content={props.image}></meta>

    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap" rel="stylesheet"></link>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700;1,900&display=swap" rel="stylesheet"></link>
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"></link>
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
    <link rel="manifest" href="/manifest.json"></link>
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"></link>
  </Head>
);