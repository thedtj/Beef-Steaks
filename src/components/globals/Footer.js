import React, { useState, setState } from 'react'
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa'

const Footer = () => {
  const [icons, setIcons] = useState([
    {
      id: 1,
      icon: <FaFacebook className="icon facebook-icon" />,
      path: 'https://www.facebook.com',
    },
    {
      id: 2,
      icon: <FaTwitter className="icon twitter-icon" />,
      path: 'https://www.twitter.com',
    },
    {
      id: 3,
      icon: <FaInstagram className="icon instagram-icon" />,
      path: 'https://www.instagram.com',
    },
  ])
  return (
    <footer>
      <div className="footer-title">BeefSteaks</div>
      <div className="icons">
        {icons.map(icon => (
          <a
            href={icon.path}
            key={icon.id}
            target="_blank"
            rel="noopener noreferrer"
          >
            {icon.icon}
          </a>
        ))}
      </div>
      <p className="copyright">copyright &copy; 2019 - BeefSteaks LLC</p>
    </footer>
  )
}

export default Footer
