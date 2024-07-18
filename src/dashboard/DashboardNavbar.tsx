import logo from '../assets/icons/navbar/logo.svg';
import { Link, useLocation } from 'react-router-dom';
import { Icon } from '../types/inboxTypes';
import { logoutIcons, navIcons } from '../data/dashboardData';
import { NavbarProps } from '../types/navTypes';

const renderNavItems = (
  items: Icon[],
  location: ReturnType<typeof useLocation>,
  handleCloseNav: () => void,
) => {
  return items.map((item, index) => (
    <li
      key={index}
      className={`flex ${location.pathname.startsWith(item.path) ? 'nav-path' : ''}`}>
      <Link to={item.path} onClick={handleCloseNav}>
        <img src={item.src} alt={item.alt} width={20} height={20} />
      </Link>
    </li>
  ));
};

const DashboardNavbar = ({ isNavbarOpen, handleCloseNav, navRef }: NavbarProps) => {
  const location = useLocation();
  return (
    <section className={`nav-section ${isNavbarOpen ? 'block' : 'hidden'}`} ref={navRef}>
      <nav className="nav-bar">
        <button className="hide-nav" />
        <div className="logo-box side-nav-logo">
          <img src={logo} alt="company's logo" width={33} height={36} />
        </div>
        <button onClick={handleCloseNav} className="close-nav-bar">
          x
        </button>
        <div className="nav-group">
          <div className="divider" />
          <ul className="nav-list">
            {renderNavItems(navIcons, location, handleCloseNav)}
          </ul>
          <ul className="logout-group">
            {renderNavItems(logoutIcons, location, handleCloseNav)}
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default DashboardNavbar;
