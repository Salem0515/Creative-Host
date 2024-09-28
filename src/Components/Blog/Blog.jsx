import React, { useState } from 'react';
import './Blog.css';
import fifteen from '../../Assets/fifteen.png';
import sixteen from '../../Assets/sixteen.png';
import seventeen from '../../Assets/seventeen.png';
import eighteen from '../../Assets/eighteen.png';
import nineteen from '../../Assets/nineteen.png';
import twinty from '../../Assets/twinty.png';
import twintyone from '../../Assets/twintyone.png';

const images = [
  { src: fifteen, label: 'Blog Type' },
  { src: sixteen, label: 'Blog Listing' },
  { src: seventeen, label: 'Blog Details' },
  { src: eighteen, label: 'Portfolio Listing' },
  { src: nineteen, label: 'Portfolio Details' },
  { src: twinty, label: 'Career Listing' },
  { src: twintyone, label: 'Career Details' },
];

const Blog = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4; // Display four images at once

  const nextImage = () => {
    if (currentIndex < images.length - itemsPerPage) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className='blog'>
      <p>BLOG & PORTFOLIO</p>
      <h1>Limitless <span>Inner</span> <span>Listing</span> And</h1>
      <h1><span>Posts</span> Options</h1>

      <div className="image-container">
        <div className="imegs" style={{ transform: `translateX(-${(currentIndex * 100) / itemsPerPage}%)` }}>
          {images.map((image, index) => (
            <div className="imeg" key={index}>
              <img src={image.src} alt={image.label} />
              <h2>{image.label}</h2>
            </div>
          ))}
        </div>
      </div>

      <div className="nav-buttons-container">
        <button className="nav-button" onClick={prevImage} disabled={currentIndex === 0}>← Previous</button>
        <button className="nav-button" onClick={nextImage} disabled={currentIndex >= images.length - itemsPerPage}>Next →</button>
      </div>
    </div>
  );
}

export default Blog;
