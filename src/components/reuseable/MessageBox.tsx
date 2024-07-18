import { Link, useParams } from 'react-router-dom';
import star from '../../assets/icons/inbox/star.svg';
import { MessageBoxProps } from '../../types/inboxTypes';

const MessageBox = ({ id, sender, time, title, body }: MessageBoxProps) => {
  const { messageId } = useParams();
  return (
    <Link
      to={`/inbox/primary/all/${id}`}
      className={`message-box ${messageId === id ? 'active' : ''}`}>
      <div className="sender-box justify-between">
        <h3 className="sender">{sender}</h3>
        <div className="time-group flex-center gap-8">
          <p>{time}</p>
          <img src={star} alt="very important message" width={10} height={9.92} />
        </div>
      </div>
      <div className="flex gap-4">
        <p className="email-title">{title}</p>
        <p className="email-body">{body}</p>
      </div>
    </Link>
  );
};

export default MessageBox;
