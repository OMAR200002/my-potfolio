import "./App.css";
import About from "./components/layout/About";
import Header from "./components/layout/Header";
import Landing from "./components/layout/Landing";
import Skills from "./components/layout/Skills";
import Work from "./components/layout/Work";
import Testimonials from "./components/layout/Testimonials";

function App() {
  return (
    <>
      <Header />
      <Landing />
      <About />
      <Skills />
      <Work />
      <Testimonials />
    </>
  );
}

export default App;
