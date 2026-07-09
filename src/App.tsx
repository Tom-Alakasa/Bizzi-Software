import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import "./styles/App.css";

function App() {
  return (
    <>
      <Nav></Nav>
      <Hero activePlatform={"windows"} />
      <Features />
      <Stats />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
