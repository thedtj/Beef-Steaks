import React from 'react'
// import { Link } from "gatsby"

import Layout from '../components/layout'
import SEO from '../components/seo'

import { PageHero } from '../components/globals/Hero'
import contactImg from '../images/bcg/contactBcg.jpeg'

const ContactPage = () => (
  <Layout>
    <SEO title="Contact us with questions and highlights!" />
    <PageHero img={contactImg}>
      Jodi Foster would like to tell you about here alien dad.
    </PageHero>
  </Layout>
)

export default ContactPage
