// Define types for menu items and submenu items
export type MenuItem =
  | 'Primary'
  | 'Channel'
  | 'Direct Message'
  | 'Group Message'
  | 'Labels';
export type SubmenuItem =
  | 'All'
  | 'New'
  | 'Assigned to me'
  | 'Closed'
  | 'Starred'
  | 'Spam'
  | 'Add Block'
  | 'General'
  | 'Announcements'
  | 'Feedback'
  | 'Alice'
  | 'Bob'
  | 'Charlie'
  | 'Dev Team'
  | 'Marketing'
  | 'Sales'
  | 'Urgent'
  | 'Important'
  | 'Later';

export interface MessageBoxProps {
  id: string;
  sender: string;
  time: string;
  title: string;
  body: string;
}

export interface Icon {
  src: string;
  alt: string;
  path: string;
}
