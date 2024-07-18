import { Outlet } from 'react-router-dom';
import NestedMenu from '../../components/inbox-sections/NestedMenu';
import '../../components/inbox-sections/inbox.css';

const InboxDashboard = () => {
  return (
    <section className="inbox-dashboard">
      <NestedMenu />
      <Outlet />
    </section>
  );
};

export default InboxDashboard;
