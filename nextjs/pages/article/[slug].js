import groq from 'groq'
import client from '../../client'
import imageUrlBuilder from '@sanity/image-url'

import HtmlHead from "../../components/head";
import Header from "../../components/header";
import Layout from "../../components/layout";
import Article from "../../components/article/article";
import Footer from "../../components/footer";
import ArticleFooter from '../../components/article/articlefooter';

function urlFor(source) { return imageUrlBuilder(client).image(source) }

const Post = (props) => {
  const { title = 'Unknown Article', name = 'Unknown Article', categories, _updatedAt, mainImage, body = [] } = props.articles
  return (
    <Layout>
      <HtmlHead title={title} description={body[0].children[0].text} image={urlFor(mainImage).width(628).url()} />
      <Header />
      <Article title={title} name={name} categories={categories} date={_updatedAt} mainImage={mainImage} body={body} />
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
    _updatedAt,
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