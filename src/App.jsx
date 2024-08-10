import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Divider from "./components/Divider";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-background">
      <Navbar />
      <MainSection />
      <Divider />
      <Services />
      <Divider />
      <AboutUs />
      <Divider />
      <Contact />
    </div>
  );
}

export default App;
