import ChatBox from '../inbox-sections/ChatBox';
import MessageList from '../inbox-sections/MessageList';
import '../inbox-sections/inbox.css';

const All = () => {
  return (
    <section className="all-message">
      <MessageList />
      <ChatBox />
    </section>
  );
};

export default All;
