import Head from 'next/head'

export default (props) => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
    <meta name="description" content={props.description}></meta>
    <title>{props.title}</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap" rel="stylesheet"></link>
    <link rel="manifest" href="/manifest.json"></link>
  </Head>
);