import notify from '../assets/icons/notification/notification.svg';
import { NotifyProps } from '../types/navTypes';
import profile from '../assets/image/profile.png';
import logo from '../assets/icons/navbar/logo.svg';

const Navigation = ({ handleMenu }: NotifyProps) => {
  return (
    <section className="navigation">
      <div className="show-nav"></div>
      <div className="flex-center gap-8 nav-left-group">
        <button onClick={handleMenu} className="menu-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24">
            <path fill="currentColor" d="M21 6v2H3V6zM3 18h18v-2H3zm0-5h18v-2H3z" />
          </svg>
        </button>
        <div className="logo-box">
          <img src={logo} alt="company's logo" width={33} height={36} />
        </div>
      </div>
      <div>
        <h1 className="main-title">Shared Inbox</h1>
      </div>
      <div className="info">
        <div className="notify">
          <img src={notify} alt="Notification bell" width={24} height={24} />
          <div className="notify-color" />
        </div>
        <div className="admin-group">
          <img src={profile} alt="Admin profile" width={40} height={40} />
          <div className="admin-details">
            <p className="admin">Abubakar Ismail</p>
            <p className="admin-role">Administrator</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navigation;
