import Link from 'next/link'
import client from '../client'
import imageUrlBuilder from '@sanity/image-url'
function urlFor(source) { return imageUrlBuilder(client).image(source) }
//${urlFor(props.image).width(300).url()}
function ArticleCard(props) {
  return (
    <div className="articleCard" alt="Article Headline Image">
      <Link href="/article/[slug]" as={`/article/${props.slug}`}>
        <a>
          <div className="articleFlex">
            <div className="articleCardHeader">
              <h1>{props.title}</h1>
              <p>{props.starter}</p>
            </div>
            <div className="articleCardImage">
              <img src={urlFor(props.image).width(300).url()} alt="Article Headline Image" />
            </div>
          </div>
          <div className="articleCardPublish">
            <span>{props.author}</span>
            <time>{new Date(props.updated).toDateString()}</time>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default ArticleCard;