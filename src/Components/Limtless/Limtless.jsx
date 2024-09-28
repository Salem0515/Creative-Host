import React, { useState } from 'react';
import './Limtless.css';

import nine from '../../Assets/nine.png';
import ten from '../../Assets/ten.png';
import elevene from '../../Assets/elevene.png';
import twilve from '../../Assets/twilve.png';
import thirteen from '../../Assets/thirteen.png';
import fourtine from '../../Assets/fourtine.png';

const Limtless = () => {
  const [activeImage, setActiveImage] = useState('');

  const handleHover = (imgId) => {
    setActiveImage(imgId);
  };

  return (
    <div className='limite'>
      <div className="overlab"></div> {/* Semi-transparent overlay for contrast */}
      <div className="main">
        <p>PAGES</p>
        <h1>LIMITLESS INNER PAGES </h1>
        <span>OPTIONS</span>
        <div className="options">

          <div className="list">
            <ul>
              <li onMouseEnter={() => handleHover('nine')}>About</li>
              <li onMouseEnter={() => handleHover('ten')}>Our Service</li>
              <li onMouseEnter={() => handleHover('elevene')}>Team Members</li>
              <li onMouseEnter={() => handleHover('twilve')}>Pricing Plan</li>
              <li onMouseEnter={() => handleHover('thirteen')}>Awards</li>
              <li onMouseEnter={() => handleHover('fourtine')}>Contact</li>
            </ul>
          </div>

          <div className="photos">
            <img id="nine" src={nine} alt="About" className={activeImage === 'nine' ? 'active' : ''} />
            <img id="ten" src={ten} alt="Our Service" className={activeImage === 'ten' ? 'active' : ''} />
            <img id="elevene" src={elevene} alt="Team Members" className={activeImage === 'elevene' ? 'active' : ''} />
            <img id="twilve" src={twilve} alt="Pricing Plan" className={activeImage === 'twilve' ? 'active' : ''} />
            <img id="thirteen" src={thirteen} alt="Awards" className={activeImage === 'thirteen' ? 'active' : ''} />
            <img id="fourtine" src={fourtine} alt="Contact" className={activeImage === 'fourtine' ? 'active' : ''} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Limtless;
