import React, { useState } from 'react';
import { Link } from 'react-scroll';
import xora from '../images/xora.svg';
import magic from "../images/magic.svg";
import close from "../images/close.svg";
import bgoutline from "../images/bg-outlines.svg";
import bgoutlinefill from "../images/bg-outlines-fill.png";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div className="fixed w-full z-40 shadow-lg bg-s1">
      {/* Mobile Navbar */}
      <div className="lg:hidden flex justify-between items-center px-4 py-3 relative z-20">
        <a href="#" duration={500}>
          <img src={xora} width={115} height={55} alt="xora-logo-1" />
        </a>
        <button onClick={toggleNav} className="text-3xl text-p1 focus:outline-none p-2 border-2 border-s4/25 rounded-full z-20">
          {navOpen ? 
          (<img src={close} width={35} height={35} alt='close-menu' />) : 
          (<img src={magic} width={35} height={35} alt='open-menu' />)}
        </button>
      </div>

      {/* Links for small screens */}
      {navOpen && (
        <div className="lg:hidden relative z-20">
          <nav>
            <ul className="flex flex-col items-center py-4 space-y-4 shadow-md relative z-30">
              <li className="text-lg font-semibold hover:text-p1 duration-500 cursor-pointer">
                <Link to="features" spy={true} smooth={true} offset={-70} duration={500} onClick={toggleNav}>
                  FEATURES
                </Link>
              </li>
              <li className="text-lg font-semibold hover:text-p1 duration-500 cursor-pointer">
                <Link to="pricing" spy={true} smooth={true} offset={-70} duration={500} onClick={toggleNav}>
                  PRICING
                </Link>
              </li>
              <li className="text-lg font-semibold hover:text-p1 duration-500 cursor-pointer">
                <Link to="faq" spy={true} smooth={true} offset={-70} duration={500} onClick={toggleNav}>
                  FAQ
                </Link>
              </li>
              <li className="text-lg font-semibold hover:text-p1 duration-500 cursor-pointer">
                <Link to="download" spy={true} smooth={true} offset={-70} duration={500} onClick={toggleNav}>
                  DOWNLOAD
                </Link>
              </li>
            </ul>
          </nav>

          {/* Background images for mobile navbar */}
          <div className="absolute inset-0 w-full h-full z-10">
            <img
              src={bgoutline}
              alt="outline"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
            <img
              src={bgoutlinefill}
              alt="outline-fill"
              className="absolute top-0 left-0 w-full h-full opacity-5 mix-blend-soft-light object-cover"
            />
          </div>
        </div>
      )}

      {/* Desktop Navbar */}
      <div className="hidden lg:block relative z-20 mb-2">
        <nav>
          <ul className="lg:flex lg:items-center lg:justify-evenly lg:mt-8 relative z-20">
            <li className="text-lg font-semibold hover:text-p1 duration-500 cursor-pointer">
              <Link to="features" spy={true} smooth={true} offset={-120} duration={500}>
                FEATURES
              </Link>
            </li>
            <li className="lg:block hidden">
              <div className="w-2 h-2 bg-p2 rounded-full"></div>
            </li>
            <li className="text-lg font-semibold hover:text-p1 duration-300 cursor-pointer">
              <Link to="pricing" spy={true} smooth={true} offset={-70} duration={500}>
                PRICING
              </Link>
            </li>
            <li className="lg:block hidden">
              <Link to="hero" spy={true} smooth={true} offset={-70} duration={500}>
                <img src={xora} width={160} height={55} alt="xora-logo-2" className='cursor-pointer'/>
              </Link>
            </li>
            <li className="text-lg font-semibold hover:text-p1 duration-300 cursor-pointer">
              <Link to="faq" spy={true} smooth={true} offset={-70} duration={500}>
                FAQ
              </Link>
            </li>
            <li className="lg:block hidden">
              <div className="w-2 h-2 bg-p2 rounded-full"></div>
            </li>
            <li className="text-lg font-semibold hover:text-p1 duration-300 cursor-pointer">
              <Link to="download" spy={true} smooth={true} offset={-70} duration={500}>
                DOWNLOAD
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;