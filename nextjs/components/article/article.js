import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'
import client from '../../client'

function urlFor(source) { return imageUrlBuilder(client).image(source) }

function articlepage(props) {
  return (
    <main className="container">
      <article className="content">
        <img className="articleMainImage" src={urlFor(props.mainImage).width(720).url()} alt="Article Headline Image" />
        <h1 alt={`Article Headline: ${props.title}`}>{props.title}</h1>

        <div className="authorAttribute" alt={`Written by: ${props.name}`}>
          <span>{props.name} · Updated {new Date(props.date).toDateString()}</span>
        </div>

        <div className="mb2rem">
          <div>
            <button className="shareButton">Twitter</button>
            <button className="shareButton">Facebook</button>
            <button className="shareButton">Instagram</button>
            <button className="shareButton">Reddit</button>
          </div>
          <span className="mb2rem">💖 Help inform the world, share this article!</span>
        </div>

        <BlockContent blocks={props.body} imageOptions={{ w: 640, h: 480, fit: 'max' }} {...client.config()} />

        <div className="mb2rem">
          <div>
            <button className="shareButton">Twitter</button>
            <button className="shareButton">Facebook</button>
            <button className="shareButton">Instagram</button>
            <button className="shareButton">Reddit</button>
          </div>
          <span className="mb2rem">💖 Enjoyed the Article? Share it!</span>
        </div>

      </article>
    </main>
  )
}

export default articlepage;