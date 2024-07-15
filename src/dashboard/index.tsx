import MainDashboard from "../sections/MainDashboard";
import Navbar from "../sections/Navbar";
import Notification from "../sections/Notification";
import './dashboard.css';

const index = () => {
  return (
    <main className="main-container">
        <Navbar />
       <section>
            <Notification />
            <MainDashboard />
        </section> 
    </main>
  )
}

export default index