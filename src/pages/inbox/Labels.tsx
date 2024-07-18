import { Outlet } from "react-router-dom";

const Labels = () => {
  return (
    <section className="center bg-primary">
      <h2>Labels</h2>
      <Outlet />
    </section>
  );
};

export default Labels;