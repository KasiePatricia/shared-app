import { useState } from 'react';
import dropdownArrow from '../../assets/icons/inbox/arrow-down.svg';

interface DropdownProps {
  title: string;
  items: string[];
}

const Dropdown = ({ title, items }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={toggleDropdown}>
        <p>{title}</p>
        <img
          src={dropdownArrow}
          alt="More options"
          width={16}
          height={16}
          className={`arrow ${isOpen ? 'open' : ''}`}
        />
      </div>
      {isOpen && (
        <ul className="dropdown-list">
          {items.map((item, index) => (
            <li key={index} className="dropdown-item">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
