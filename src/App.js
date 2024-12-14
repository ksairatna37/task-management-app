import React, { useState } from 'react';
import './App.css';
import Homepage from './pages/homepage/Homepage';
import Dashboard from './pages/Dashboard/Dashboard';
import TaskList from './pages/TaskList/TaskList';
import Navbar from './pages/common/Navbar';
import SignInForm from './pages/homepage/SignInForm';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isAuthenticated, setIsAuthenticated] = useState(false);


  const handleNavigation = (page) => {
    if (page !== 'home' && !isAuthenticated) {
      setCurrentPage('home'); // Redirect to home if not authenticated
        return;
    }
     setCurrentPage(page);
  };

   const handleAuth = (loggedIn) => {
      setIsAuthenticated(loggedIn);
      if(loggedIn) {
        setCurrentPage("dashboard")
      }

   };
  return (
    <div className="App">
      {isAuthenticated ? <Navbar onNavigation={handleNavigation} currentPage={currentPage}/> : null}
      <div className="container mb-5">
        {currentPage === 'home' &&  <Homepage  isAuthenticated = {isAuthenticated} onAuth = {handleAuth} />}
          {isAuthenticated &&  (currentPage === 'dashboard' &&  <Dashboard/>)}
         {isAuthenticated &&  (currentPage === 'tasklist' &&  <TaskList />)}
      </div>
    </div>
  );
}

export default App;