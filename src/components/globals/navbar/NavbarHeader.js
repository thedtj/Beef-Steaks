import React from 'react'
import { Link } from 'gatsby'
import logo from '../../../images/logo.svg'
import { FaAlignRight } from 'react-icons/fa'

const NavbarHeader = ({ handleNavbar }) => {
  return (
    <div className="header__wrapper">
      <Link to="/">
        <img src={logo} alt="beefsteaks logo" />
      </Link>
      <FaAlignRight className="toggle__icon" onClick={handleNavbar} />
    </div>
  )
}

export default NavbarHeader
