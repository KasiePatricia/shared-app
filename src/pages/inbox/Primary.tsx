import { Outlet } from 'react-router-dom';

const PrimaryMessage = () => {
  return (
    <section className="primary-message">
      <Outlet />
    </section>
  );
};

export default PrimaryMessage;
