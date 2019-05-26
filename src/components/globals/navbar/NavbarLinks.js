import React, { useState, setState } from 'react'
import { Link } from 'gatsby'

const NavbarLinks = ({ navbarOpen }) => {
  const [links, setLinks] = useState([
    { id: 0, path: '/', name: 'home' },
    { id: 1, path: '/about/', name: 'about' },
    { id: 2, path: '/menu/', name: 'menu' },
    { id: 3, path: '/contact/', name: 'contact' },
  ])

  return (
    <ul
      className={navbarOpen ? 'nav__list open' : 'nav__list'}
      open={navbarOpen}
    >
      {links.map(link => (
        <li key={link.id}>
          <Link to={link.path} className="nav__link">
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default NavbarLinks
