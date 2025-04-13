import { lazy, Suspense } from "react";

const ContactSection = lazy(() => import("./Components/ContactSection"));
const Footer = lazy(() => import("./Components/Footer"));
const HeroSection = lazy(() => import("./Components/HeroSection"));
const Navbar = lazy(() => import("./Components/Navbar"));
const OutsourceSection = lazy(() => import("./Components/OutsourceSection"));
const TaskManager = lazy(() => import("./Components/TaskManager"));

import LoadingSpinner from "./Components/LoadingSpinner";

function App() {
  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <Navbar />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <HeroSection />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <OutsourceSection />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <TaskManager />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <ContactSection />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <Footer />
      </Suspense>

   
    </>
  );
}

export default App;
