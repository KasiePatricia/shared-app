import { Outlet } from "react-router-dom";

const GroupMessage = () => {
  return (
    <section className="center bg-primary">
      <h2>Group Message</h2>
      <Outlet />
    </section>
  );
};

export default GroupMessage;