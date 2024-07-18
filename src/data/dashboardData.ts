import allMenu from '../assets/icons/navbar/all-nav.svg';
import anotherFolder from '../assets/icons/navbar/another-folder.svg';
import boxList from '../assets/icons/navbar/box-list.svg';
import inbox from '../assets/icons/navbar/inbox.svg';
import logout from '../assets/icons/navbar/logout.svg';
import moreMessage from '../assets/icons/navbar/more-message.svg';
import setting from '../assets/icons/navbar/setting.svg';
import volume from '../assets/icons/navbar/volume-high.svg';
import info from '../assets/icons/inbox/info-circle.svg';
import peopleUser from '../assets/icons/navbar/profile-user.svg';
import { Icon } from '../types/inboxTypes';

export const navIcons: Icon[] = [
  { src: allMenu, alt: 'All Menu', path: '/all-menu' },
  { src: inbox, alt: 'Inbox', path: '/inbox' },
  { src: volume, alt: 'Volume', path: '/volume' },
  { src: boxList, alt: 'Box List', path: '/box-list' },
  { src: peopleUser, alt: 'Users', path: '/groups' },
  { src: moreMessage, alt: 'More Message', path: '/more-message' },
  { src: anotherFolder, alt: 'Another Folder', path: '/folders' },
  { src: setting, alt: 'Setting', path: '/settings' },
];

export const logoutIcons: Icon[] = [
  { src: info, alt: 'More infomation', path: '/notification' },
  { src: logout, alt: 'Logout', path: '/logout' },
];
