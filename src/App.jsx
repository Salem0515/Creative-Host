import React, { useState, useEffect } from 'react';
import Nav from './Components/NavBar/Nav';
import Business from './Components/Business/Business';
import Cards from './Components/Cards/Cards';
import Home from './Components/HomePage/Home';
import Plugins from './Components/Plugins/Plugins';
import Limtless from './Components/Limtless/Limtless';
import Blog from './Components/Blog/Blog';
import Quiries from './Components/Quiries/Quiries';
import About from './Components/AboutUs/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Loading from './Components/Loading/Loading';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Hide loading screen after a specific time
    }, 3000); // Set the duration here (3000ms = 3 seconds)

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <Loading/> // Show loading screen
      ) : (
        <>
          <Nav />
          <div id="demo"><Business /></div>
          <div id="plugins"><Plugins /></div>
          <div id="faq"><Quiries /></div>
          <div id="docs"><Blog /></div>
          <Cards />
          <Home />
          <Limtless />
          <About />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
