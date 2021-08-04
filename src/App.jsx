import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Work from "./components/work/Work";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import "./App.scss";


function App() {
  return (
    <div className="app">
      <div className="nav-bar">
        <Navbar />
      </div>
      <div className="sections">
        <About />
        <Work />
        <Contact />
        <Footer className="footer" />
      </div>
    </div>
  );
}

export default App;