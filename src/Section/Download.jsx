import React from 'react'
import xora from "../images/xora.svg"
import screen from "../images/screen.jpg"
import lines from "../images/lines.svg"
import { links } from '../Constants'
import Marker from '../Components/Marker'
import afterpay from "../images/logos/afterpay.svg"
import amplitude from "../images/logos/amplitude.svg"
import sonos from "../images/logos/sonos.svg"
import maze from "../images/logos/maze.svg"
import drips from "../images/logos/drips.svg"
const Download = () => {
  return (
    <div id='download' className='g7 relative pb-32 pt-24 max-lg:pb-24 max-md:py-16'>
      <div className='container'>
        <div className='flex items-center'>
            <div className='relative mr-6 flex-540 max-xl:flex-280 max-lg:flex-256 max-md:flex-100'>
                <img src={xora} className='mb-10'/>
                <h3 className='body-1 max-w-440'>
                    Try it now for free on iOS, Android, PC, Web - whatever your flavor, we've got you covered.
                </h3>
                <ul className='flex gap-6 mt-10'>
                    {links.map((link) => (
                        <li 
                        className='download_tech-link download_tech-link_last-before download_tech-link_last-after'>
                            <a href={link.url} 
                            className='size-22 download_tech-icon_before relative flex items-center justify-center rounded-half 
                            border-2 border-s3 bg-s1 transition-borderColor duration-500 hover:border-s4'>
                                <span className='absolute -top-2 rotate-90'>
                                    <Marker/>
                                </span>
                                <img src={lines} alt='lines' className='absolute size-13/20'/>
                                <span className='download_tech-icon'>
                                    {link.icon}
                                </span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className='mb-10 max-md:hidden'>
                <div className='download_preview-before download_preview-after rounded-40 relative w-[955px] border-2 border-s5 p-6'>
                    <div className='relative rounded-3xl bg-s1 px-6 pb-6 pt-14'>
                        <span className='download_preview-dot left-6 bg-p2 '/>
                        <span className='download_preview-dot left-11 bg-s3 '/>
                        <span className='download_preview-dot left-16 bg-p1/15 '/>
                        <img src={screen} width={855} height={655} alt='screen' className='rounded-xl'/>
                    </div>
                </div>
            </div>
        </div>
        <div className='max-lg:hidden flex items-center justify-evenly mt-28'>
            <img src={afterpay} alt='afterpay'/>
            <img src={amplitude} alt='amplitude'/>
            <img src={sonos} alt='sonos'/>
            <img src={maze} alt='maze'/>
            <img src={drips} alt='drips'/>
        </div>
      </div>
    </div>
  )
}

export default Download;
