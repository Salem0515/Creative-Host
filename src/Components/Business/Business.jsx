import React from 'react';
import './Business.css';
import one from '../../Assets/one.png';
import two from '../../Assets/two.png';
import three from '../../Assets/three.png';
import four from '../../Assets/four.png';
import five from '../../Assets/five.png';
import zero from '../../Assets/zero.png'; // Assuming this is the background image

const Business = () => {
  return (
    <div className='Business'>
      <div className="overlay"></div> {/* Semi-transparent overlay for contrast */}
      <div className="content">
        <div className="text-container">
          <h1>CREATIVE <span>STUDIO</span></h1>
          <h1>FROM <span>GARUDA</span></h1>
          <p>This design is an excellent solution for startups, businesses, personal portfolios, and services. The WordPress theme is fully equipped with pre-made demos, portfolio and blog posts, stylishly designed layouts, and a premium feel.</p>
          <button className="view-demo-btn">View Demo</button>
        </div>

        <div className="image-section">
          {/* Images on the left */}
          <div className="floating-images left">
            <img className="small-img" src={four} alt="Design 1" />
            <img className="small-img" src={five} alt="Design 2" />
          </div>

          {/* Central Laptop Image */}
          <img className="laptop-image" src={three} alt="Main Design" />

          {/* Images on the right */}
          <div className="floating-images right">
            <img className="small-img" src={one} alt="Design 3" />
            <img className="small-img" src={two} alt="Design 4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
