import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'
import client from '../client'
import main from '../components/main.module.css';

function urlFor(source) { return imageUrlBuilder(client).image(source) }

function article(props) {
  return (
    <main className={main.container}>
      <article className={main.content}>
        <img className={main.articleMainImage} src={urlFor(props.mainImage).width(720).url()} alt="Article Headline Image" />
        <h1 alt={`Article Headline: ${props.title}`}>{props.title}</h1>
        <div className={main.authorAttribute} alt={`Written by: ${props.name}`}>
            <img className={main.articleAuthorAvatar} src={urlFor(props.authorImage).width(50).url()} alt="Author Avatar" />
            {props.name}
        </div>
        <BlockContent blocks={props.body} imageOptions={{ w: 320, h: 240, fit: 'max' }} {...client.config()} />
      </article>
    </main>
  )
}

export default article;