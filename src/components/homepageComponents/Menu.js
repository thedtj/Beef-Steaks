import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

import SectionTitle from '../SectionTitle'
import MenuItem from './MenuItem'

const MENU_QUERY = graphql`
  {
    menu: allContentfulBeefSteaks {
      edges {
        node {
          id
          name
          price
          ingredients
          image {
            fixed(width: 150, height: 150) {
              ...GatsbyContentfulFixed
            }
          }
        }
      }
    }
  }
`

const Menu = () => (
  <section>
    <SectionTitle title="featured items" message="and finally, the beef" />
    <div className="menu">
      <StaticQuery
        query={MENU_QUERY}
        render={data => {
          const menu = data.menu.edges
          return menu.map(plate => (
            <MenuItem key={plate.node.id} plate={plate.node} />
          ))
        }}
      />
    </div>
  </section>
)

export default Menu
