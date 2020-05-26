import imageUrlBuilder from '@sanity/image-url'
import client from '../client'
import groq from 'groq'
import main from '../components/main.module.css';

import ArticleCard from "../components/articlecard";

function article(props) {
  return (
    <div className={main.container}>
      <div className={main.articleFooter}>
        <h3>Latest Articles you might like</h3>
        <div className={main.indexArticles}>
          {props.props.map(({ _id, title = '', slug = '', _updatedAt = '', mainImage = '' }) => slug && (
            <ArticleCard key={_id} title={title} slug={slug.current} updated={_updatedAt} image={mainImage} />)
          )}
        </div>
      </div>
    </div>
  )
}


article.getInitialProps = async () => ({
  posts: await client.fetch(groq`*[_type == "post"] | order(_createdAt desc)`)
})

export default article;