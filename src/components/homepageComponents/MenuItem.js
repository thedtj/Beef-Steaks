import React from 'react'

import Img from 'gatsby-image'
import formatMoney from '../../utils/formatMoney'

const MenuItem = plate => {
  const { name, price, ingredients } = plate.plate
  const { fixed } = plate.plate.image
  console.log(plate.plate.image, name)
  return (
    <div className="menu-item__wrapper">
      <Img fixed={fixed} className="menu-item__image" />
      <div className="menu-item__text">
        <div className="menu-item__content">
          <h3 className="menu-item__name">{name}</h3>
          <h3 className="menu-item__price">{formatMoney(price)}</h3>
        </div>
        <p className="menu-item__ingredients">{ingredients}</p>
      </div>
    </div>
  )
}
export default MenuItem
