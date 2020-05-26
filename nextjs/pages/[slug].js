import groq from 'groq'
import client from '../client'

import HtmlHead from "../components/head";

import Header from "../components/header";
import Layout from "../components/layout";
import Article from "../components/article";
import Footer from "../components/footer";

const Post = (props) => {
  const { title = 'Unknown Article', name = 'Unknown Article', categories, authorImage, body = [] } = props
  return (
    <Layout>
      <HtmlHead title={title} description={"Drunk Squad is a gaming community tailored towards mature gamers who like to have fun."} />
      <Header />
      <Article title={title} name={name} categories={categories} authorImage={authorImage} body={body} />
      <Footer />
    </Layout>
  )
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  body
}`

Post.getInitialProps = async function (context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.query
  return await client.fetch(query, { slug })
}

export default Post