import clsx from 'clsx';
import React from 'react'
import Marker from './Marker';

const ReusableButton = ({imgSrc, children, href, containerClassName, onClick}) => {

  const Inner = () =>(
    <div>
      <span className=' relative inline-flex items-center min-h[60px] px-4 py-2 g4 rounded-2xl inner-before group-hover:before:opacity-100 overflow-hidden'>
        <span className=' absolute -left-[1px]'>
          <Marker/>
        </span>
        {imgSrc && (
          <img src={imgSrc} alt='circle' className='size-10 mr-5 object-contain z-10' />
        )}
        <span className='relative z-2 font-poppins font-bold text-p1 uppercase'>{children}</span>
      </span>
      <span className='glow-before glow-after' />
    </div>
  );

  return href ? (
    <a className={clsx('relative inline-flex p-0.5 g5 rounded-2xl shadow-500 group', containerClassName)} href={href}>
      <Inner/>
    </a>
  ) : (
    <div className={clsx('relative inline-flex p-0.5 g5 rounded-2xl shadow-500 group')} onClick={onClick}>
      <Inner/>
    </div>
  )
}

export default ReusableButton;
