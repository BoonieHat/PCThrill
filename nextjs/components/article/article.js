import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'
import client from '../../client'
import articlestyle from './article.module.css';
import main from '../main.module.css';

function urlFor(source) { return imageUrlBuilder(client).image(source) }

function articlepage(props) {
  return (
    <main className={main.container}>
      <article className={articlestyle.content}>
        <img className={articlestyle.articleMainImage} src={urlFor(props.mainImage).width(720).url()} alt="Article Headline Image" />
        <h1 alt={`Article Headline: ${props.title}`}>{props.title}</h1>

        <div className={articlestyle.authorAttribute} alt={`Written by: ${props.name}`}>
          <span>{props.name} · Updated {new Date(props.date).toDateString()}</span>
        </div>

        <div className={main.mb2rem}>
          <div>
            <button className={articlestyle.shareButton}>Twitter</button>
            <button className={articlestyle.shareButton}>Facebook</button>
            <button className={articlestyle.shareButton}>Instagram</button>
            <button className={articlestyle.shareButton}>Reddit</button>
          </div>
          <span className={main.mb2rem}>💖 Help inform the world, share this article!</span>
        </div>

        <BlockContent blocks={props.body} imageOptions={{ w: 640, h: 480, fit: 'max' }} {...client.config()} />

        <div className={main.mb2rem}>
          <div>
            <button className={articlestyle.shareButton}>Twitter</button>
            <button className={articlestyle.shareButton}>Facebook</button>
            <button className={articlestyle.shareButton}>Instagram</button>
            <button className={articlestyle.shareButton}>Reddit</button>
          </div>
          <span className={main.mb2rem}>💖 Enjoyed the Article? Share it!</span>
        </div>

      </article>
    </main>
  )
}

export default articlepage;