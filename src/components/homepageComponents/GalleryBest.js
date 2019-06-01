import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const GALLERY_IMAGE_QUERY = graphql`
  {
    getImages: allFile(filter: { relativeDirectory: { eq: "homeGallery" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

const Gallery = () => (
  <StaticQuery
    query={GALLERY_IMAGE_QUERY}
    render={data => {
      const images = data.getImages.edges
      console.log(images)

      return (
        <section>
          <div className="gallery__wrapper">
            {images.map(({ node: image }, index) => (
              <div
                key={index}
                className={`gallery__item gallery__item--${index + 1}`}
              >
                <Img fluid={image.childImageSharp.fluid} />
                <p className="gallery__info">Another Great Food!</p>
              </div>
            ))}
          </div>
        </section>
      )
    }}
  />
)

export default Gallery
