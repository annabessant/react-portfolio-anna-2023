import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Header from '../components/Header';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
        <Header backgroundImage="https://i.imgur.com/qkdpN.jpg">
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            <h1>Welcome</h1>
            <h4>...ADD SOMETHING...</h4>
        </Header>
      {/* We are passing the currentPage from state and the function to update it */}
  
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}
