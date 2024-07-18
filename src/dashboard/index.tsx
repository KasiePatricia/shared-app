import { Outlet } from 'react-router-dom';
import DashboardNavbar from './DashboardNavbar';
import Navigation from './Navigation';
import './dashboard.css';
import { useRef, useState } from 'react';
import useOutsideClick from '../hooks/useOutsideClick';

const Dashboard = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const navRef = useRef<HTMLElement>(null);

  const handleMenu = () => {
    setShowNavbar(true);
  };

  const handleCloseNav = () => {
    setShowNavbar(false);
  };

  useOutsideClick(navRef, handleCloseNav);
  return (
    <main className="main-container">
      <DashboardNavbar
        isNavbarOpen={showNavbar}
        handleCloseNav={handleCloseNav}
        navRef={navRef}
      />

      <section className='content-section'>
        <Navigation handleMenu={handleMenu} />
        <Outlet />
      </section>
    </main>
  );
};

export default Dashboard;
