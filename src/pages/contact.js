import React from 'react'
// import { Link } from "gatsby"

import Layout from '../components/layout'
import SEO from '../components/seo'

import { PageHero, Banner } from '../components/globals/hero'
import contactImg from '../images/bcg/contactBcg.jpeg'

const ContactPage = () => (
  <Layout>
    <SEO title="Contact us with questions and highlights!" />
    <PageHero img={contactImg}>
      <Banner title="Contact Us" subtitle="Lay your beefs down before us" />
    </PageHero>
  </Layout>
)

export default ContactPage
