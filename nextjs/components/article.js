import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'
import client from '../client'
import articleContent from '../components/article.module.css';

function urlFor(source) { return imageUrlBuilder(client).image(source) }

function article(props) {
  return (
    <main className={articleContent.container}>
      <article className={articleContent.content}>
        <h1 alt={`Article Headline: ${props.title}`}>{props.title}</h1>
        {props.categories && (
          <ul>Tags
            {props.categories.map(category => <li key={category}>{category}</li>)}
          </ul>
        )}
        {props.authorImage && (
          <div>
            <span alt={`Written by: {props.name}`}>
              <img src={urlFor(props.authorImage).width(50).url()} alt="Author Avatar" />
              {props.name}
            </span>
          </div>
        )}
        <BlockContent blocks={props.body} imageOptions={{ w: 320, h: 240, fit: 'max' }} {...client.config()} />
      </article>
    </main>
  )
}

export default article;