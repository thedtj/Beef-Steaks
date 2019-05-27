import React from 'react'
// import { Link } from "gatsby"

import Layout from '../components/layout'
import SEO from '../components/seo'

import { PageHero } from '../components/globals/Hero'
import menuImg from '../images/bcg/menuBcg.jpeg'

const MenuPage = () => (
  <Layout>
    <SEO title="Menu - What's good to eat here." />
    <PageHero img={menuImg}>You want the food. And it wants you.</PageHero>
  </Layout>
)

export default MenuPage
