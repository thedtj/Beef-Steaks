/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'

import '../sass/layout.scss'

const Layout = ({ children }) => <>{children}</>

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout