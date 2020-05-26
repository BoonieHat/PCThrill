import Head from 'next/head'

export default (props) => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
    <meta name="description" content={props.description}></meta>
    <title>{props.title}</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap" rel="stylesheet"></link>
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"></link>
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
    <link rel="manifest" href="/site.webmanifest"></link>
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"></link>
    <meta name="msapplication-TileColor" content="#da532c"></meta>
    <meta name="theme-color" content="#ffffff"></meta>
  </Head>
);