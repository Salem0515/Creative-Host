import React from 'react'
import './Plugins.css'

import bunny from '../../Assets/bunny.png'
import Elementor from '../../Assets/Elementor.png'
import mountain from '../../Assets/mountain.png'

const Plugins = () => {
  return (
    <div className='plugins'>
      <p>Plugins</p>
      <h1>WE WELL WITH <span>ALL</span>  MAJOR</h1>
      <h1> <span>WORDPRESS</span> PLUGINS</h1>

      <div className="carts">
        <div className="cart">
            <img src={Elementor} alt="" />
            <div className="para">
                <h4>Elementor</h4>
                <p>Start building amazing landing pages with drag & drop</p>
            </div>
        </div>
        <div className="cart">
            <img src={mountain} alt="" />
            <div className="para">
                <h4>Mountain</h4>
                <p>Flexibly Create contact forms and embedd on website pages</p>
            </div>

        </div>
        <div className="cart">
            <img src={bunny} alt="" />
            <div className="para">
                <h4>Bunny</h4>
                <p>Start building amazing landing pages with drag & drop</p>
                </div>
        </div>
      </div>
    </div>
  )
}

export default Plugins
