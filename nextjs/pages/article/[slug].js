import groq from 'groq'
import client from '../../client'

import HtmlHead from "../../components/head";

import Header from "../../components/header";
import Layout from "../../components/layout";
import Article from "../../components/article";
import Footer from "../../components/footer";
import ArticleFooter from '../../components/articlefooter';

const Post = (props) => {
  const { title = 'Unknown Article', name = 'Unknown Article', categories, authorImage, body = [] } = props.articles
  console.log(props.articles)
  return (
    <Layout>
      <HtmlHead title={title} description={name} />
      <Header />
      <Article title={title} name={name} categories={categories} authorImage={authorImage} body={body} />
      <ArticleFooter props={props.posts} />
      <Footer />
    </Layout>
  )
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  "mainImage": asset->image,
  body
}`

const queryRecent = groq`*`

Post.getInitialProps = async (context) => {
  const { slug = "" } = context.query
  const article = await client.fetch(query, { slug })
  const posts = await client.fetch(queryRecent)
  return { articles: article, posts: posts }
}

export default Post