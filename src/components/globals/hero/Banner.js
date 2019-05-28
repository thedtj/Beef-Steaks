import React from 'react'

const Banner = ({ title, subtitle, children }) => (
  <div className="banner">
    <h1 className="banner__title">{title}</h1>
    <span className="banner__subtitle">{subtitle}</span>
    {children}
  </div>
)

Banner.defaultProps = {
  title: 'default title',
}

export default Banner
