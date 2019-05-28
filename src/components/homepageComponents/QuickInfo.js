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
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
        exercitationem quidem suscipit distinctio quos nostrum atque minima quo
        dolorum consequatur ad sunt expedita, temporibus inventore, quas
        adipisci neque nam commodi eius minus delectus. Consectetur aperiam est
        deserunt in aliquid assumenda, vero qui voluptatem, animi reprehenderit
        repellat nobis, nesciunt repudiandae deleniti.
      </p>
      <Link to="/about/" />
    </div>
    <button className="section-button">About</button>
  </section>
)

export default QuickInfo
