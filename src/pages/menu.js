import React from 'react'
// import { Link } from "gatsby"

import Layout from '../components/layout'
import SEO from '../components/seo'

import { PageHero, Banner } from '../components/globals/hero'
import menuImg from '../images/bcg/menuBcg.jpeg'

const MenuPage = () => (
  <Layout>
    <SEO title="Menu - What's good to eat here." />
    <PageHero img={menuImg}>
      <Banner title="Our Menu" subtitle="Food for your stomach to think on" />
    </PageHero>
  </Layout>
)

export default MenuPage
