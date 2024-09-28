import React from 'react';
import "./Home.css";
import six from '../../Assets/six.png';
import seven from '../../Assets/seven.png';
import one from '../../Assets/one.png';

const Home = () => {
  return (
    <div className='home'>
      <h1 className='number'>04+</h1>
      <h1 className='text'>Home Pages</h1>
      <div className="pics">
        <div className="home_1">
          <h2>HOME-1</h2>
          <img src={seven} alt="Home Page 1" />
        </div>
        <div className="home_2">
          <img src={one} alt="Home Page 2" />
          <h2>HOME-2</h2>
        </div>
        <div className="home_3">
          <h2>HOME-3</h2>
          <img src={six} alt="Home Page 3" />
        </div>
      </div>
    </div>
  );
}

export default Home;
