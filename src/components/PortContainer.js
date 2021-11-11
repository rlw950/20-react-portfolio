import React, { useState } from 'react';
import Nav from './Nav';
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';

function Port() {
  // Using useState, set the default value for currentPage to 'Home'
  const [currentPage, handlePageChange] = useState('About');

  // The renderPage method uses a switch statement to render the appropriate current page
  const renderPage = () => {
    switch (currentPage) {
      case 'Contact':
        return <Contact />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Resume':
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <div>
      {/* Pass the state value and the setter as props to NavTabs */}
      < Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Call the renderPage function passing in the currentPage */}
      <div> {renderPage(currentPage)} </div>
    </div>
  );
}

export default Port;
