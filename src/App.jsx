import ContactSection from "./Components/ContactSection";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import PaymentCollection from "./Components/PaymentCollection";
import TaskManager from "./Components/TaskManager";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <PaymentCollection />
      <TaskManager />
      <ContactSection />
    </>
  );
}

export default App;
