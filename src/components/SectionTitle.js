import React from 'react'

const SectionTitle = ({ message, title }) => (
  <div className="section-title">
    {' '}
    <h3 className="section-title__message"> {message}</h3>{' '}
    <h2 className="section-title__title"> {title}</h2>{' '}
    <div className="underline"> </div>
  </div>
)

SectionTitle.defaultProps = {
  message: 'a simple message',
  title: 'for you',
}

export default SectionTitle
