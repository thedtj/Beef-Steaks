import React from 'react'
// import { Link } from "gatsby"

import Layout from '../components/layout'
import SEO from '../components/seo'
import { HomeHero } from '../components/globals/Hero'
import img from '../images/bcg/homeBcg.jpeg'

const IndexPage = () => (
  <Layout>
    <SEO title="Big and Beefy" />
    <HomeHero img={img}>I'm holding out for a hero.</HomeHero>
  </Layout>
)

export default IndexPage
