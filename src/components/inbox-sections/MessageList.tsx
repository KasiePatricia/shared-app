import search from '../../assets/icons/inbox/search.svg';
import menu from '../../assets/icons/inbox/menu.svg';
import Dropdown from '../reuseable/Dropdown';
import { messageListData } from '../../data/inboxData';
import MessageBox from '../reuseable/MessageBox';
import { useState } from 'react';

const MessageList = () => {
  const [searchItem, setSearchItem] = useState<string>('');

  const channelItems = ['Channel 1', 'Channel 2', 'Channel 3'];
  const assignedToItems = ['User 1', 'User 2', 'User 3'];

  return (
    <aside className="message-list">
      <div className="flex gap-16">
        <div className="search">
          <div className="flex-center">
            <img src={search} alt="search" width={20} height={20} />
            <input
              type="text"
              value={searchItem}
              onChange={e => setSearchItem(e.target.value)}
              placeholder="Search"
            />
          </div>
          <img src={menu} alt="more search" width={20} height={20} />
        </div>
        <div className="channel">
          <Dropdown title="Channel" items={channelItems} />
          <Dropdown title="Assigned To" items={assignedToItems} />
        </div>
      </div>

      {/* messages */}
      <div className="grid gap-12">
        {messageListData.map((data, index) => (
          <MessageBox
            key={index}
            id={data.id}
            sender={data.sender}
            time={data.time}
            title={data.title}
            body={data.body}
          />
        ))}
      </div>
    </aside>
  );
};

export default MessageList;
