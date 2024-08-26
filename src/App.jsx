import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Intro from "./components/Intro";

function App() {
  return (
    <div className="bg-background">
      <Navbar />
      <Header />
      <Intro />
      <Services />
      <AboutUs />
      <Contact />
    </div>
  );
}

export default App;
