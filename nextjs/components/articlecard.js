import Link from 'next/link'
import index from '../components/index.module.css';
function ArticleCard(props) {
  return (

    <li className={index.postcard} key={props.id}>
      <Link href="/[slug]" as={`/${props.slug}`}>
        <a>
          <h4>{props.title}</h4>
        </a>
      </Link>{' '}
      <div>
        <time>
          {new Date(props.updated).toDateString()}
        </time>
      </div>
    </li>
  )
}

export default ArticleCard;