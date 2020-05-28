import client from '../../client'
import groq from 'groq'

import ArticleCard from "../homepagearticle";

function article(props) {
  return (
    <div className="container">
      <div className="articleFooter">
        <h3>Latest Articles you might like</h3>
        <div className="indexArticles">
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