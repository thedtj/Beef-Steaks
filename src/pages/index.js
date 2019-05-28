import React from 'react'
// import { Link } from "gatsby"

import Layout from '../components/layout'
import SEO from '../components/seo'
import { HomeHero, Banner } from '../components/globals/hero'
import QuickInfo from '../components/homepageComponents/QuickInfo'
import img from '../images/bcg/homeBcg.jpeg'

const IndexPage = () => (
  <Layout>
    <SEO title="Big and Beefy" />
    <HomeHero img={img}>
      <Banner
        title="BeefSteaks"
        subtitle={`It's food for your mouth and joy for your heart`}
      >
        <button>Menu</button>
      </Banner>
    </HomeHero>
    <QuickInfo />
  </Layout>
)

export default IndexPage
