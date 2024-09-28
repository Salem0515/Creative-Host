import React, { useState } from 'react';
import './About.css';

import twintytow from '../../Assets/twintytow.png';
import twintythree from '../../Assets/twintythree.png';
import twintyfour from '../../Assets/twintyfour.png';
import twintyfive from '../../Assets/twintyfive.png';
import twintysix from '../../Assets/twintysix.png';
import twintyseven from '../../Assets/twintyseven.png';
import twintyeight from '../../Assets/twintyeight.png';

const testimonials = [
  {
    img: twintytow,
    text: "Thank you for your amazing customer support. Designthemes responded and addressed my questions and site issues immediately.",
    name: "Esinden",
    location: "Canada"
  },
  {
    img: twintythree,
    text: "Excellent service and support. Highly recommend!",
    name: "John Doe",
    location: "USA"
  },
  {
    img: twintyfour,
    text: "Quick response and very helpful staff.",
    name: "Jane Smith",
    location: "UK"
  },
  {
    img: twintyfive,
    text: "Great experience overall. Thank you!",
    name: "Michael Brown",
    location: "Australia"
  },
  {
    img: twintysix,
    text: "Fantastic support! Couldn't ask for more.",
    name: "Sarah Connor",
    location: "Germany"
  },
  {
    img: twintyseven,
    text: "Very satisfied with the service provided.",
    name: "Tom Hanks",
    location: "Canada"
  },
  {
    img: twintyeight,
    text: "Professional and efficient service.",
    name: "Emma Watson",
    location: "UK"
  },
];

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4; // Display four testimonials at once

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (testimonials.length - itemsPerPage + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + (testimonials.length - itemsPerPage + 1)) % (testimonials.length - itemsPerPage + 1));
  };

  return (
    <div className='about'>
      <h1>WHAT <span>OUR</span> CLIENT SAYS</h1>
      <h1>ABOUT <span>DESIGNTHEMES</span></h1>
      <div className="panars">
        <div className="panar" style={{ transform: `translateX(-${(currentIndex * 50) / itemsPerPage}%)` }}>
          {testimonials.map((testimonial, index) => (
            <div className="testimonial" key={index}>
              <img src={testimonial.img} alt="" />
              <p>{testimonial.text}</p>
              <span>{testimonial.name}</span>, <p>{testimonial.location}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="navigation">
        <button onClick={prevTestimonial}>Previous</button>
        <button onClick={nextTestimonial}>Next</button>
      </div>
    </div>
  );
}

export default About;
