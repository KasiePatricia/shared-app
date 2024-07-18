import { Outlet } from 'react-router-dom';

const Channel = () => {
  return (
    <section className="center bg-primary">
      <h2>Channel</h2>
      <Outlet />
    </section>
  );
};

export default Channel;
