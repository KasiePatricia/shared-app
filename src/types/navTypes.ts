import { RefObject } from 'react';

export interface NavbarProps {
  isNavbarOpen: boolean;
  handleCloseNav: () => void;
  navRef: RefObject<HTMLElement>;
}

export interface NotifyProps {
  handleMenu: () => void;
}
