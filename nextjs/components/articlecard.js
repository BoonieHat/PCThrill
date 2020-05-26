import Link from 'next/link'
import main from '../components/main.module.css';
import client from '../client'
import imageUrlBuilder from '@sanity/image-url'
function urlFor(source) { return imageUrlBuilder(client).image(source) }

function ArticleCard(props) {
  console.log(props.image)
  return (
    <div className={main.articleCard} style={{ backgroundImage: `url( ${urlFor(props.image).width(300).url()} )` }} alt="Article Headline Image">
      <Link href="/article/[slug]" as={`/article/${props.slug}`}>
        <a>
          <div className={main.articleCardOverlay}>
            <h4>{props.title}</h4>
            <article>
              <time>{new Date(props.updated).toDateString()}</time>
            </article>
          </div>
        </a>
      </Link>{' '}
    </div>
  )
}

export default ArticleCard;