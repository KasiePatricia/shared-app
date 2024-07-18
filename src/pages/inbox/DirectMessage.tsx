import { Outlet } from 'react-router-dom';

const DirectMessage = () => {
  return (
    <section className="center bg-primary">
      <h2>Direct Message</h2>
      <Outlet />
    </section>
  );
};

export default DirectMessage;
