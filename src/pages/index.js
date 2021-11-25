import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import './index.scss'

const IndexPage = () => (
  <Layout Title="Laboratorio" >
    <Seo title="Home" />
    <div className="container">
      <h1>Laboratorio 2 Parte 2</h1>
      <p>Página creada con gatsby usando bucket s3, google analytics y sass</p>

      <StaticImage
        src="../images/silhouette-3284953.svg"
        width={500}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
      <p>
        <Link className="link" to="/page-2/">Go to page 2</Link> <br />
        <Link className="link" to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
        <Link className="link" to="/using-ssr">Go to "Using SSR"</Link> <br />
        <Link className="link" to="/using-dsg">Go to "Using DSG"</Link>
      </p>

    </div>
  </Layout>
)

export default IndexPage
