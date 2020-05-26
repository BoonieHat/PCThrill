import groq from 'groq'
import client from '../client'
import main from '../components/main.module.css';
import HtmlHead from "../components/head";
import Header from "../components/header";
import ArticleCard from "../components/articlecard";
import Layout from "../components/layout";
import Footer from "../components/footer";

function Index(props) {
  const { posts = [] } = props
  console.log(posts)
  return (
    <Layout>
      <HtmlHead title={"PC Thrill"} description={"PC Thrill is your go to for trending Gaming PC news, builds, guides, and reviews on all your favorite brands."} />
      <Header />
      <div className={main.container}>
        <main className={main.indexContent}>
          <h1>PC Thrill</h1>
          <div className={main.indexArticles}>
            {posts.map(({ _id, title = '', slug = '', _updatedAt = '', mainImage = '' }) => slug && (
              <ArticleCard id={_id} title={title} slug={slug.current} updated={_updatedAt} image={mainImage} />)
            )}
          </div>
        </main>
      </div>
      <Footer />
    </Layout>
  )
}

Index.getInitialProps = async () => ({
  posts: await client.fetch(groq`*[_type == "post"] | order(_createdAt desc)`)
})

export default Index