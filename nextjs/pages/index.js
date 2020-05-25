import Link from 'next/link'
import groq from 'groq'
import client from '../client'
import globalStyles from '../styles/global.js';
import HtmlHead from "../components/head";
import styles from '../components/styles.module.css';

import ArticleCard from "../components/articlecard";

function Index(props) {
  const { posts = [] } = props
  return (
    <>
      <style jsx global>{globalStyles}</style>
      <HtmlHead title={"PC Thrill"} description={"PC Thrill is your go to for PC Gaming related builds, reviews, demos, updates and news."} />
      <div className={styles.main}>
        <h1>PC Thrill</h1>
        {posts.map(({ _id, title = '', slug = '', _updatedAt = '' }) => slug && (
          <ArticleCard id={_id} title={title} slug={slug.current} updated={_updatedAt}/>)
        )}
      </div>
    </>
  )
}

Index.getInitialProps = async () => ({
  posts: await client.fetch(groq`
    *[_type == "post"] | order(_createdAt asc)
  `)
})

export default Index