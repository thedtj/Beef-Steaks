import React from 'react'
import { Link } from 'gatsby'
import SectionTitle from '../SectionTitle'

const QuickInfo = () => (
  <section>
    <SectionTitle
      message="A couple of hungry guys who have"
      title="got you covered"
    />
    <div className="quick-info">
      <p className="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla incidunt
        at magnam, velit corporis, obcaecati voluptatum inventore laboriosam
        eveniet labore consequatur eaque dolore distinctio dicta repellat
        expedita reiciendis fugiat a.
      </p>
      <Link to="/about/" />
    </div>
    <button className="section-button">About</button>
  </section>
)

export default QuickInfo
