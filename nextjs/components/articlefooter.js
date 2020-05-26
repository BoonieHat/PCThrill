import imageUrlBuilder from '@sanity/image-url'
import client from '../client'
import groq from 'groq'
import main from '../components/main.module.css';

import ArticleCard from "../components/articlecard";

function urlFor(source) { return imageUrlBuilder(client).image(source) }

function article(props) {
  const { posts = [] } = props.props
  return (
    <div className={main.container}>
      <h2>Recents Articles you might like</h2>
      <ol className={main.postlist}>
        {props.props.map(({ _id, title = '', slug = '', _updatedAt = '' }) => slug && (
          <ArticleCard id={_id} title={title} slug={slug.current} updated={_updatedAt} />)
        )}
      </ol>
    </div>
  )
}


article.getInitialProps = async () => ({
  posts: await client.fetch(groq`*[_type == "post"] | order(_createdAt desc)`)
})

export default article;