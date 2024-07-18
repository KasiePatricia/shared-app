import React, { useState } from 'react';
import addCircleIcon from '../../assets/icons/inbox/add-circle.svg';
import Button from '../reuseable/Button';
import dropdownArrow from '../../assets/icons/inbox/dropdown-arrow.svg';
import arrowIcon from '../../assets/icons/inbox/arrow-down.svg';
import { Link, useLocation } from 'react-router-dom';
import { MenuItem, SubmenuItem } from '../../types/inboxTypes';
import { menu } from '../../data/inboxData';

const NestedMenu: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<MenuItem | null>('Primary');
  const [submenu, setSubmenu] = useState<SubmenuItem | null>(null);
  const location = useLocation();

  const handleClick = () => {
    alert('Button clicked!');
  };

  const handleMenuClick = (item: MenuItem) => {
    setOpenMenu(openMenu === item ? null : item);
    if (item !== 'Group Message') setSubmenu(null);
  };

  const handleSubmenuClick = (submenuItem: SubmenuItem) => {
    setSubmenu(submenuItem);
  };

  const handleBtnClick = (item: MenuItem) => {
    setOpenMenu(openMenu === item ? null : item);
    // navigate(`/inbox/${item}`)
  };

  return (
    <aside className="nested-menu">
      {/* Mobile menu */}
      <div className="mobile-menu-wrap overflow-auto scroll-bar-hidden">
        <ul className="mobile-menu-list">
          {(Object.keys(menu) as MenuItem[]).map((item, index) => (
            <li
              key={index}
              className={`mobile-menu-item ${location.pathname.startsWith('/inbox/' + item.split(' ')[0].toLowerCase()) ? 'active' : ''}`}>
              <button className="mobile-menu-btn" onClick={() => handleBtnClick(item)}>
                {item.split(' ')[0]}
              </button>
            </li>
          ))}
        </ul>
        {openMenu && (
          <div className="mobile-submenu-wrap">
            <ul className="mobile-submenu-list">
              {menu[openMenu].map((subItem, idx) => (
                <li
                  key={idx}
                  className={`mobile-submenu-item ${submenu === subItem.name ? 'active' : ''} ${
                    location.pathname.startsWith(subItem.link) ? 'path' : ''
                  }`}>
                  <Link
                    to={subItem.link}
                    onClick={() => handleSubmenuClick(subItem.name)}
                    className={` `}>
                    <img src={subItem.icon} alt={subItem.name} width={16} height={16} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <button className="more-btn center">
        <img src={arrowIcon} alt="close menu" />
      </button>

      {/* Desktop menu */}
      <Button
        text="Compose"
        icon={addCircleIcon}
        onClick={handleClick}
        className="hide-btn"
      />
      <ul className="menu-list">
        {(Object.keys(menu) as MenuItem[]).map((item, index) => (
          <li key={index} className="menu-item">
            <button
              onClick={() => handleMenuClick(item)}
              className="menu-title"
              tabIndex={0}>
              <span className="flex-center">
                <img
                  src={dropdownArrow}
                  alt="arrow"
                  width={9.6}
                  height={8}
                  className={`arrow-icon main-arrow ${openMenu === item ? 'right-arrow' : 'left-arrow'}`}
                />
                <p className="btn-text">{item}</p>
              </span>
              {item === 'Group Message' ? (
                <img
                  src={dropdownArrow}
                  alt="arrow"
                  width={9.6}
                  height={8}
                  className={`arrow-icon ${openMenu === item ? 'right-arrow' : 'left-arrow'}`}
                />
              ) : null}
            </button>
            {openMenu === item && (
              <div>
                <ul className="submenu-list">
                  {menu[item].map((subItem, idx) => (
                    <li
                      key={idx}
                      className={`submenu-item ${submenu === subItem.name ? 'active' : ''} ${
                        location.pathname.startsWith(subItem.link) ? 'path' : ''
                      }`}>
                      <Link
                        to={subItem.link}
                        onClick={() => handleSubmenuClick(subItem.name)}
                        className={` `}>
                        <img
                          src={subItem.icon}
                          alt={subItem.name}
                          width={16}
                          height={16}
                        />
                        <span className="submenu-name">{subItem.name}</span>
                        {subItem.count && <span>{subItem.count}</span>}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default NestedMenu;
