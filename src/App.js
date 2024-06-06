//import About from "./components/About";
import Experience from './components/Experience';
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Skills />
      {/*<About />*/}
      <Experience/>
      <Work />
      <Contact />
    </div>
  );
}

export default App;
