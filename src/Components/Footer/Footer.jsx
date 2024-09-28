import React from 'react';
import './Footer.css'; // Make sure to import the CSS file

const Footer = () => {
  return (
    <div className='Footer'>
      <h1 className='GRE'>GAR<span>U</span>DAN</h1>
      <h1>Pay Once! 
      Experience
      the extraordinary features 
      forever.
      </h1>
      <button className='last_button'>Purchase Now</button>
      <br />
      <div className="line"></div>
      <div className="tags">
        <p>Copyright @2024 Made By <span>Mohamed Elpolty</span></p>
        <p>Terms And Condition | Privacy Policy</p>
      </div>
    </div>
  );
}

export default Footer;
