import React from 'react'
import "./Grid1.css"

export default function Grid1() {
  return (
    <div id='gs-grid1-main'>
        <div id='gs-grid1-top-logo'>
          <h3>Door Delivery</h3>
          <span>🛵</span>
        </div>
        <div id='gs-grid1-welcometext-main'>
          <span>Faster</span>
          <span>
            <span className='green'>Delivery  </span>
            <span>&</span>
          </span>
          <span>
            <span>Easy  </span>
            <span className='green'>Pickup.</span>
          </span>
        </div>
        <p>
          Getting everything from stores nearby anytime. Just Ask US.
        </p>
        <div>
          <button className='button'>Order Now</button>
        </div>
    </div>
  )
}
