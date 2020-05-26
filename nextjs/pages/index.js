import Link from 'next/link'
import groq from 'groq'
import client from '../client'

import indexStyle from '../components/index.module.css';

import HtmlHead from "../components/head";
import Header from "../components/header";
import ArticleCard from "../components/articlecard";
import Layout from "../components/layout";
import Footer from "../components/footer";

function Index(props) {
  const { posts = [] } = props
  return (
    <Layout>
      <HtmlHead title={"PC Thrill"} description={"PC Thrill is your go to for PC Gaming related builds, reviews, demos, updates and news."} />
      <Header />
      <div className={indexStyle.container}>
        <main className={indexStyle.content}>
          <h1>PC Thrill</h1>
          <ol className={indexStyle.postlist}>
            {posts.map(({ _id, title = '', slug = '', _updatedAt = '' }) => slug && (
              <ArticleCard id={_id} title={title} slug={slug.current} updated={_updatedAt} />)
            )}
          </ol>
        </main>
      </div>
      <Footer />
    </Layout>
  )
}

Index.getInitialProps = async () => ({
  posts: await client.fetch(groq`*[_type == "post"] | order(_createdAt desc)`)
})

export default Index