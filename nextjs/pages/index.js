import groq from 'groq'
import client from '../client'
import main from '../components/main.module.css';
import HtmlHead from "../components/head";
import Header from "../components/header";
import ArticleCard from "../components/articlecard";
import Layout from "../components/layout";
import Footer from "../components/footer";

import React, { useState, useEffect } from 'react'
import { config } from 'react-spring'
import dynamic from 'next/dynamic'
const TextTransition = dynamic(() => import("react-text-transition"), {
  ssr: false
});

import { SKILLS } from '../constants/Stack'

function Index(props) {
  const { posts = [] } = props
  const [index, setIndex] = useState(0)
  useEffect(() => { setInterval(() => setIndex(index => index + 1), 5000) }, [])

  return (
    <Layout>
      <HtmlHead title={"PC Thrill"} description={"PC Thrill is your go to for trending Gaming PC news, builds, guides, and reviews on all your favorite brands."} />
      <Header />
      <div className={main.container}>
        <main className={main.indexContent}>
          <h1 className={main.indexTransition}>
            Gaming PC {' '}
            <TextTransition
              text={SKILLS[index % SKILLS.length]}
              springConfig={config.gentle}
              style={{ display: 'inline-block' }}
            />
          </h1>
          <div className={main.indexArticles}>
            {posts.map(({ _id, title = '', slug = '', _updatedAt = '', mainImage = '' }) => slug && (
              <ArticleCard key={_id} title={title} slug={slug.current} updated={_updatedAt} image={mainImage} />)
            )}
          </div>
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