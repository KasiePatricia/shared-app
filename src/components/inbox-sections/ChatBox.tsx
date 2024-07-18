import { useParams } from 'react-router-dom';
import EmptyMessage from '../../assets/image/empty-message.svg';
import { useEffect } from 'react';

const ChatBox = () => {
  const { messageId } = useParams();
  useEffect(() => {
    console.log({ messageId });
  }, [messageId]);

  return (
    <aside className="chat-box center-box">
      {!messageId ? (
        <div className="center-box gap-15">
          <img src={EmptyMessage} alt="No message" width={117.94} height={107.95} />
          <div className="center-box gap-4 empty-chat">
            <h4 className="empty-title">No Message Selected</h4>
            <p className="empty-description">
              Select a message to open conversation and get started
            </p>
          </div>
        </div>
      ) : (
        <div className="center">hi {messageId}</div>
      )}
    </aside>
  );
};

export default ChatBox;
