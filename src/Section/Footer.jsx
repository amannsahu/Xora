import React from 'react'
import { socials } from '../Constants';

const Footer = () => {
  return (
    <div>
      <div className='container flex items-center justify-evenly py-12 max-lg:flex-col max-lg:gap-6'>
        <div>
            &#169;All rights reserved
        </div>
        <div className='flex items-center gap-5'>
            <a href="#" className='hover:text-p1'>Privacy Policy</a>
            <div className='h-0.5 w-0.5 rounded-full bg-p2'></div>
            <a href="#" className='hover:text-p1'>Terms of Use</a>
        </div>
        <ul className='flex items-center gap-3'>
            {socials.map((social) => (
                <a href='#' key={social.id}>
                    <img src={social.icon} alt={social.title}
                    className='border-2 border-s5 rounded-full p-2 hover:border-s4 hover:transition-borderColor hover:duration-500'/>
                </a>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default Footer;
