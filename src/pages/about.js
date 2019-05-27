import React from 'react'
// import { Link } from "gatsby"

import Layout from '../components/layout'
import SEO from '../components/seo'

import { PageHero } from '../components/globals/Hero'
import aboutImg from '../images/bcg/aboutBcg.jpeg'

const AboutPage = () => (
  <Layout>
    <SEO title="About Ellensburg's Hot New Beef Spot" />
    <PageHero img={aboutImg}>What it's all about. </PageHero>
  </Layout>
)

export default AboutPage
