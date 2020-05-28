import Link from 'next/link'
import main from '../components/main.module.css';
import client from '../client'
import imageUrlBuilder from '@sanity/image-url'
function urlFor(source) { return imageUrlBuilder(client).image(source) }
//${urlFor(props.image).width(300).url()}
function ArticleCard(props) {
  return (
    <div className={main.articleCard} alt="Article Headline Image">
      <Link href="/article/[slug]" as={`/article/${props.slug}`}>
        <a>
          <div className={main.articleFlex}>
            <div className={main.articleCardHeader}>
              <h1>{props.title}</h1>
              <p>{props.starter}</p>
            </div>
            <div className={main.articleCardImage}>
              <img src={urlFor(props.image).width(300).url()} alt="Article Headline Image" />
            </div>
          </div>
          <div className={main.articleCardPublish}>
            <time>{new Date(props.updated).toDateString()}</time>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default ArticleCard;