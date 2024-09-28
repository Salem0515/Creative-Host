import React from 'react';
import './Cards.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointer, faLaptopCode, faDesktop, faFileInvoice } from '@fortawesome/free-solid-svg-icons';

const Cards = () => {
  return (
    <div className='cards'>
      <div className="card">
        <FontAwesomeIcon icon={faHandPointer} className='icon' aria-label="One Click Demo Import" />
        <h3>One Click Demo Import</h3>
        <p>Instantly import pre-designed content and layouts with just one click.</p>
      </div>
      <div className="card">
        <FontAwesomeIcon icon={faLaptopCode} className='icon' aria-label="No need of Code Skills" />
        <h3>No need of Code Skills</h3>
        <p>Easily build and customize websites without any coding knowledge or expertise required.</p>
      </div>
      <div className="card">
        <FontAwesomeIcon icon={faDesktop} className='icon' aria-label="Responsive for All Devices" />
        <h3>Responsive for All Devices</h3>
        <p>Adapts fluidly to various screen sizes and devices, optimizing user experience.</p>
      </div>
      <div className="card">
        <FontAwesomeIcon icon={faFileInvoice} className='icon' aria-label="NexGen Documentation" />
        <h3>NexGen Documentation</h3>
        <p>Comprehensive documentation for a seamless experience.</p>
      </div>
    </div>
  );
}

export default Cards;
