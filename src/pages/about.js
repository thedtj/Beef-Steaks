import React from 'react'
// import { Link } from "gatsby"

import Layout from '../components/layout'
import SEO from '../components/seo'

import { PageHero, Banner } from '../components/globals/hero'
import aboutImg from '../images/bcg/aboutBcg.jpeg'

const AboutPage = () => (
  <Layout>
    <SEO title="About Ellensburg's Hot New Beef Spot" />
    <PageHero img={aboutImg}>
      <Banner title="About Us" subtitle="Get to know our beef" />
    </PageHero>
  </Layout>
)

export default AboutPage
