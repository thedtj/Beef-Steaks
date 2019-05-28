import React from 'react'
import img from '../../../images/bcg/homeBcg.jpeg'

const HomeHero = ({ img, children }) => (
  <header
    className="hero"
    style={{
      background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${img}) center/cover fixed no-repeat`,
    }}
  >
    {children}
  </header>
)

const PageHero = ({ img, children }) => (
  <header
    className="hero--default"
    style={{
      background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${img}) center/cover fixed no-repeat`,
    }}
  >
    {children}
  </header>
)

HomeHero.defaultProps = {
  img,
}

PageHero.defaultProps = {
  img,
}

export { HomeHero, PageHero }
