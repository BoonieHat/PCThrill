import Link from 'next/link'
import main from '../components/main.module.css';
import client from '../client'
import imageUrlBuilder from '@sanity/image-url'
function urlFor(source) { return imageUrlBuilder(client).image(source) }
//${urlFor(props.image).width(300).url()}
function ArticleCard(props) {
  return (
    <div className={main.articleCard} style={{ backgroundImage: `url(null)` }} alt="Article Headline Image">
      <Link href="/article/[slug]" as={`/article/${props.slug}`}>
        <a>
          <article className={main.mtAuto}>
            <time>{new Date(props.updated).toDateString()}</time>
            <h2>{props.title}</h2>
          </article>
        </a>
      </Link>{' '}
    </div>
  )
}

export default ArticleCard;