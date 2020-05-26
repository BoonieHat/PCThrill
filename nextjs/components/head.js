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
    <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"></meta>

    <meta property="twitter:card" content="summary_large_image"></meta>
    <meta property="twitter:url" content="https://pcthrill.com/"></meta>
    <meta property="twitter:title" content={props.title}></meta>
    <meta property="twitter:description" content={props.description}></meta>
    <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"></meta>

    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap" rel="stylesheet"></link>
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"></link>
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
    <link rel="manifest" href="/manifest.json"></link>
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"></link>
  </Head>
);