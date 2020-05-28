import groq from 'groq'
import client from '../client'
import HomePageArticle from "../components/homepagearticle";
import Layout from "../components/layout";

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
    <Layout 
      headTitle={"PC Thrill"}
      headDesc={"PC Thrill is your go to for trending Gaming PC news, builds, guides, and reviews no matter what type of enthuasist you are."}
    >
      <div className="container">
        <main className="indexContent">
          <h1 className="indexTransition">
            Gaming PC {' '}
            <TextTransition
              text={SKILLS[index % SKILLS.length]}
              springConfig={config.gentle}
              style={{ display: 'inline-block' }}
            />
          </h1>
          <div className="indexArticles">
            {posts.map(({ _id, title = '', body = '', slug = '', _updatedAt = '', mainImage = '' }) => slug && (
              <HomePageArticle key={_id} title={title} starter={body[0].children[0].text} slug={slug.current} updated={_updatedAt} image={mainImage} />)
            )}
          </div>
        </main>
      </div>
    </Layout>
  )
}

Index.getInitialProps = async () => ({
  posts: await client.fetch(groq`*[_type == "post"] | order(_createdAt desc)`)
})

export default Index