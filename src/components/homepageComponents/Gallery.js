import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const SINGLE_IMAGE_QUERY = graphql`
  {
    img1: file(relativePath: { eq: "homeGallery/img-1.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img2: file(relativePath: { eq: "homeGallery/img-2.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img3: file(relativePath: { eq: "homeGallery/img-3.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Gallery = () => (
  <StaticQuery
    query={SINGLE_IMAGE_QUERY}
    render={data => {
      const img1 = data.img1.childImageSharp.fluid
      const img2 = data.img2.childImageSharp.fluid
      const img3 = data.img3.childImageSharp.fluid

      return (
        <section>
          <div className="gallery__wrapper">
            <div className="gallery__item gallery__item--1">
              <Img fluid={img1} />
              <p className="gallery__info">tasty pizza</p>
            </div>
            <div className="gallery__item gallery__item--2">
              <Img fluid={img2} />
              <p className="gallery__info">chicken thyme</p>
            </div>
            <div className="gallery__item gallery__item--3">
              <Img fluid={img3} />
              <p className="gallery__info">pork choppy chop</p>
            </div>
          </div>
        </section>
      )
    }}
  />
)

export default Gallery
