import React, { useState } from 'react';
import './Quiries.css';
import SpaceMan from '../../Assets/SpaceMan.png';

const Quiries = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const queries = [
    {
      question: "What I Build With This Theme?",
      answer: "GARUDA Creative Business Agency WordPress Theme is a perfect way to showcase the possibilities of your software visually on your web platform. This design is an excellent solution for startups, cloud hosting, application, event, business, personal portfolio, services, enterprises, social media marketing, Digital agency. The WordPress theme is fully equipped with pre-made designs.",
    },
    {
      question: "Will I Get All Demos For Single Purchase With Lifetime Valid?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi odio quibusdam, aspernatur quo quod doloribus eius at laboriosam unde ratione fuga atque mollitia voluptate qui nulla earum perspiciatis a nobis.",
    },
    {
      question: "Can I Change The Theme Language To My Local Language?",
      answer: "Yes, The Theme Is Compatible To Adjust To Different Languages. Read More About Choosing The Language For Your Theme From The Documentation.",
    },
    {
      question: "The Price Of Garuda Is Affordable Compared To Other Themes Providing Similar Features?",
      answer: "With Our Expertise Of More Than 10 Years, We Know What It Takes To Build A Quality Product. Our Pricing Brings Justice To Our Work. We Don’t Offer Low-Cost Items; Also, We Don’t Cost You A Fortune. We Balance Quality And Affordability, And That’s Where We Succeed.",
    },
    {
      question: "How To Install The Garudan Theme In WordPress?",
      answer: "Check Out The Step-By-Step Instruction (With Video) From Our Documentation To Install Garudan Theme. It Is A Very Simple Process That Takes Only Around A Few Minutes To Set Up.",
    },
    {
      question: "How Fast Is Your Support?",
      answer: "We Will Get Back To You Within 12 Hours Of Your Mail. We Are Striving Hard To Answer You Faster Than 12 Hours. However, That Depends Upon The Number Of Support Tickets We Receive Every Day.",
    },
  ];

  return (
    <div className='Quiries'>
      <div className="innerdiv">
        <div className="left_side">
          <h1>FAQ</h1>
          <h2>WE UNDERSTAND YOUR QUERIES</h2>
          <img src={SpaceMan} alt="Space Man" />
        </div>
        <div className="right_side">
          {queries.map((query, index) => (
            <div className="text_container" key={index}>
              <h4 onClick={() => toggleExpand(index)} className={`question ${expandedIndex === index ? 'active' : ''}`}>
                {query.question}
              </h4>
              <p className={`answer ${expandedIndex === index ? 'show' : ''}`}>{query.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Quiries;
