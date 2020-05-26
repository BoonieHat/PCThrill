import groq from 'groq'
import client from '../../client'
import imageUrlBuilder from '@sanity/image-url'

import HtmlHead from "../../components/head";

import Header from "../../components/header";
import Layout from "../../components/layout";
import Article from "../../components/article";
import Footer from "../../components/footer";
import ArticleFooter from '../../components/articlefooter';

function urlFor(source) { return imageUrlBuilder(client).image(source) }

const Post = (props) => {
  const { title = 'Unknown Article', name = 'Unknown Article', categories, authorImage, mainImage, body = [] } = props.articles
  return (
    <Layout>
      <HtmlHead title={title} description={name} image={urlFor(mainImage).width(460).url()} />
      <Header />
      <Article title={title} name={name} categories={categories} authorImage={authorImage} mainImage={mainImage} body={body} />
      <ArticleFooter props={props.posts} />
      <Footer />
    </Layout>
  )
}

const query = groq`
  *[_type == "post" && slug.current == $slug][0]
  {
    title,
    "name": author->name,
    "categories": categories[]->title,
    "authorImage": author->image,
    mainImage,
    body
  }
`

const queryRecent = groq`*[_type == "post"] | order(_createdAt desc)`

Post.getInitialProps = async (context) => {
  const { slug = "" } = context.query
  const article = await client.fetch(query, { slug })
  const posts = await client.fetch(queryRecent)
  return { articles: article, posts: posts }
}

export default Post