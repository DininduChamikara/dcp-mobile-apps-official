import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro";
import Popular from "./Components/Popular/Popular";
import './App.css';
import Performance from "./Components/Performance/Performance";
import Technologies from "./Components/Technologies/Technologies";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testimonial from "./Components/Testimonials/Testimonial";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import {themeContext} from './Context';
import { useContext } from "react";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="App"
      style={{
        background: darkMode? 'black': '',
        color : darkMode? 'white': '' 
      }}
    >
      <Navbar/>
      <Intro/>
      <Popular/>
      <Performance/>
      <Technologies/>
      <Portfolio/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
