import React, { useState } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import './App.css'; // Import external CSS

const App = () => {
  const [activePage, setActivePage] = useState('Home');

  const renderPage = () => {
    switch (activePage) {
      case 'Home':
        return <Home />;
      case 'About':
        return <About />;
      case 'Projects':
        return <Projects />;
      case 'Contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh' }}>
      <Navbar setActivePage={setActivePage} />
      {renderPage()}
    </div>
  );
};

export default App;
