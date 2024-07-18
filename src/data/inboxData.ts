import info from '../assets/icons/inbox/info-circle.svg';
import messageNotifyIcon from '../assets/icons/inbox/message-notif.svg';
import messageAllIcon from '../assets/icons/inbox/messages-all.svg';
import userIcon from '../assets/icons/inbox/user-tick.svg';
import tickIcon from '../assets/icons/inbox/tick-circle.svg';
import starredIcon from '../assets/icons/inbox/starred.svg';
import addIcon from '../assets/icons/inbox/add.svg';
import { MenuItem, MessageBoxProps, SubmenuItem } from '../types/inboxTypes';

// Define the structure of the menu object
export const menu: Record<
  MenuItem,
  { name: SubmenuItem; icon: string; count?: number; link: string }[]
> = {
  Primary: [
    { name: 'All', icon: messageAllIcon, count: 345, link: '/inbox/primary/all' },
    { name: 'New', icon: messageNotifyIcon, count: 50, link: '/inbox/primary/new' },
    { name: 'Assigned to me', icon: userIcon, link: '/inbox/primary/assigned' },
    { name: 'Closed', icon: tickIcon, link: '/inbox/primary/closed' },
    { name: 'Starred', icon: starredIcon, link: '/inbox/primary/starred' },
    { name: 'Spam', icon: info, count: 1, link: '/inbox/primary/spam' },
    { name: 'Add Block', icon: addIcon, link: '/inbox/primary/spam' },
  ],
  Channel: [
    { name: 'General', icon: messageAllIcon, link: '/inbox/channel/general' },
    {
      name: 'Announcements',
      icon: messageNotifyIcon,
      link: '/inbox/channel/announcement',
    },
    { name: 'Feedback', icon: info, link: '/inbox/channel/feedback' },
  ],
  'Direct Message': [
    { name: 'Alice', icon: userIcon, link: '/inbox/direct/alice' },
    { name: 'Bob', icon: userIcon, link: '/inbox/direct/bob' },
    { name: 'Charlie', icon: userIcon, link: '/inbox/direct/charlie' },
  ],
  'Group Message': [
    { name: 'Dev Team', icon: info, link: '/inbox/group/dev' },
    { name: 'Marketing', icon: messageNotifyIcon, link: '/inbox/group/marketing' },
    { name: 'Sales', icon: info, link: '/inbox/group/sales' },
  ],
  Labels: [
    { name: 'Urgent', icon: info, link: '/inbox/labels/urgent' },
    { name: 'Important', icon: messageNotifyIcon, link: '/inbox/labels/important' },
    { name: 'Later', icon: userIcon, link: '/inbox/labels/later' },
  ],
};

// export const dropdownData = [
//     {
//       title: "Channel",
//     },
//     {
//       title: "Assigned to",
//     },
// ];

export const messageListData: MessageBoxProps[] = [
  {
    id: 'message-1',
    sender: 'mistalogikk@gmail.com',
    title: "Haven't gotten my refund",
    body: 'Hello vendor, I have shipped the product but haven...',
    time: 'Now',
  },
  {
    id: 'message-2',
    sender: '+234 (810) 234 5678',
    title: "Haven't gotten my refund",
    body: 'Hello vendor, I have shipped the product but haven...',
    time: 'Now',
  },
  {
    id: 'message-3',
    sender: 'israelajala@gmail.com',
    title: "Haven't gotten my refund",
    body: 'Hello vendor, I have shipped the product but haven...',
    time: 'Now',
  },
  {
    id: 'message-4',
    sender: '+234 (810) 234 5678',
    title: "Haven't gotten my refund",
    body: 'Hello vendor, I have shipped the product but haven...',
    time: 'Now',
  },
  {
    id: 'message-5',
    sender: 'mistalogikk@gmail.com',
    title: "Haven't gotten my refund",
    body: 'Hello vendor, I have shipped the product but haven...',
    time: 'Now',
  },
];
