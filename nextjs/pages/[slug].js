import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'
import client from '../client'

import globalStyles from '../styles/global.js';
import HtmlHead from "../components/head";
import styles from '../components/styles.module.css';

function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

const Post = (props) => {
  const { title = 'Unknown Article', name = 'Unknown Article', categories, authorImage, body = [] } = props
  return (
    <>
      <style jsx global>{globalStyles}</style>
      <HtmlHead title={title} description={"Drunk Squad is a gaming community tailored towards mature gamers who like to have fun."} />
      <div className={styles.container}>
        <article className={styles.main}>
          <h1>{title}</h1>
          <span>By {name}</span>
          {categories && (
            <ul>Tags
              {categories.map(category => <li key={category}>{category}</li>)}
            </ul>
          )}
          {authorImage && (
            <div>
              <img src={urlFor(authorImage).width(50).url()} />
            </div>
          )}
          <BlockContent blocks={body} imageOptions={{ w: 320, h: 240, fit: 'max' }} {...client.config()} />
        </article>
      </div>
    </>
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