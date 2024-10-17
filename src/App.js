import logo from './logo.svg';
import './App.css';
import Navbar from './Section/Navbar';
import Hero from './Section/Hero';
import Feature from './Section/Feature';
import Pricing from './Section/Pricing';
import FaqSec from "./Section/FaqSec";
import Testimonials from './Section/Testimonials';
import Download from './Section/Download';
import Footer from './Section/Footer';

function App() {
  return (
    <div className='overflow-hidden'>
      <Navbar/>
      <Hero/>
      <Feature/>
      <Pricing/>
      <FaqSec/>
      <Testimonials/>
      <Download/>
      <Footer/>
    </div>
  );
}

export default App;
