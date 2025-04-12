import ContactSection from "./Components/ContactSection";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import OutsourceSection from "./Components/OutsourceSection";
import TaskManager from "./Components/TaskManager";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <OutsourceSection/>
      <TaskManager />
      <ContactSection />
      <Footer/>
    </>
  );
}

export default App;
