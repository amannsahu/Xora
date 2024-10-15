import React from 'react'
import {features, details} from "../Constants/index";
import ReusableButton from "../Components/ReusableButton";

const Feature = () => {
  return (
    <div id='features'>
      <div className='container'>
        <div className='relative flex md:flex-wrap flex-nowrap border-2 border-s3 rounded-7xl 
        md:overflow-hidden max-md:flex-col feature-after md:g7 max-md:border-none max-md:rounded-none max-md:gap-3'>
           {features.map((feature) => (
            <div 
            key={feature.id}
            className='relative z-2 md:px-10 px-5 md:pb-10 pb-5 flex-50 max-md:g7 max-md:border-2
            max-md:border-s3 max-md:rounded-3xl max-md:flex-320'>
                <div className='w-full flex justify-start items-start'>
                    <div className='-ml-3 mb-12 flex flex-col items-center justify-center'>
                        <div className='w-0.5 h-16 bg-s3 ' />
                        <img src={feature.icons}
                        alt={feature.caption}
                        className='size-28 object-contain'
                        />
                    </div>
                </div>
                <div className='caption small-2 uppercase text-p3'>{feature.caption}</div>
                <h1 className='h3 text-p4 max-w-388'>{feature.title}</h1>
                <p className='body-1 mt-5 mb-7'>{feature.text}</p>
                <button>
                    <ReusableButton imgSrc={feature.button.icon}>{feature.button.title}</ReusableButton>
                </button>
            </div>
           ))}

                <ul className='max-md:hidden flex justify-around flex-grow px-[5%] border-2 border-s3 
                rounded-7xl '>
                        {details.map((detail) =>(
                            <li 
                            key={detail.id}
                            className='relative pt-16 pb-14 px-4'>
                                <div className='flex flex-col w-full h-full z-10'>
                                    <div className='flex items-center justify-center mx-auto mb-3 border-2
                                     border-s2 rounded-full hover:border-s4 transition-all duration-500
                                     shadow-500 size-20'>
                                        <img src={detail.icon} alt={detail.title} 
                                        className='size-17/20 z-20 object-contain'/>
                                    </div>
                                    <h1 className='relative z-2 max-w-36 mx-auto my-0 base-small text-center uppercase'
                                        >{detail.title}
                                    </h1>
                                </div>
                            </li>
                        ))}
                </ul>
        </div>
      </div>
    </div>
  )
}

export default Feature;
