import React from 'react';
import './Contact.css'
import Blob from '../../Assets/Blob.mp4';

const Contact = () => {
  return (
    <div className='last'>
      <div className="overlayer">
        <div className="containers">
      <div className="Blob">
        <video src={Blob} autoPlay loop muted></video>
      </div>
      <div className="contact">
        <p>Contact</p>
        <h1>GOT A PROBLEM? WE GOT YOU</h1>
        <h1>YOU!</h1>
        <p>“We rise by lifting others” is what we believe in. You won’t stay stuck in the process; that’s our promise. All the support tickets are taken care of with high priority. You will hear back from us within 12 hours of receiving your mail.</p>
        <div className="center">
          <div className="ramp">
            <h4>Contact Us</h4>
          </div>
          <div className="ramp">
            <h4>User Guide</h4>
          </div>
        </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Contact;
