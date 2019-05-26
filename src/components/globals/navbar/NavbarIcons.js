import React, { useState, setState } from 'react'
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa'

const NavbarIcons = () => {
  const [icons, setIcons] = useState([
    {
      id: 1,
      icon: <FaFacebook className="navbar__icon navbar__icon--facebook" />,
      path: 'https://www.facebook.com',
    },
    {
      id: 2,
      icon: <FaTwitter className="navbar__icon navbar__icon--twitter" />,
      path: 'https://www.twitter.com',
    },
    {
      id: 3,
      icon: <FaInstagram className="navbar__icon navbar__icon--instagram" />,
      path: 'https://www.instagram.com',
    },
  ])

  return (
    <div className="navbar__icon--wrapper">
      {icons.map(icon => (
        <a
          href={icon.path}
          key={icon.id}
          target="_blank"
          rel="noopoener noreferrer"
        >
          {icon.icon}
        </a>
      ))}
    </div>
  )
}

export default NavbarIcons
