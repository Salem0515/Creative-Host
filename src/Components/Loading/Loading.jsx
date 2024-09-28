import React from 'react';
import './Loading.css'; // Import the CSS for styling

const Loading = () => {
  return (
    <div className="loading-screen">
      <div className="loader"></div>
      <h1>Loading...</h1>
    </div>
  );
};

export default Loading;
