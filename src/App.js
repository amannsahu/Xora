import logo from './logo.svg';
import './App.css';
import Navbar from './Section/Navbar';
import Hero from './Section/Hero';
import Feature from './Section/Feature';

function App() {
  return (
    <div className='overflow-hidden'>
      <Navbar/>
      <Hero/>
      <Feature/>
    </div>
  );
}

export default App;
