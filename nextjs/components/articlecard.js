import Link from 'next/link'

function ArticleCard(props) {
  return (
    <li key={props.id}>
      <Link href="/[slug]" as={`/${props.slug}`}>
        <a>{props.title}</a>
      </Link>{' '}
      ({new Date(props.updated).toDateString()})
    </li>
  )
}

export default ArticleCard;