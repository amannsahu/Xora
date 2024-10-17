import clsx from 'clsx';
import React from 'react'
import { testimonials } from '../Constants';

const TestimonialItem = ({item, className}) => {
  return (
    <div className={clsx('relative px-14 pt-11 pb-14 after:absolute after:bottom-0 after:right-0 after:h-0.5 after:w-screen after:bg-s2 after:content-[""] max-md:px-0 max-md:pt-11 after:max-md:-right-4', className)}>
      
      <blockquote className='h6 mb-8 text-p4'>
        {item.comment}
      </blockquote>

      <div className='flex items-center gap-4'>
        <img src={item.avatarUrl} alt={item.title} width={85} className='border-2 border-s2 rounded-full p-2'/>
        <div>
          <p className='body-2 text-p1'>{item.name}</p>
          <p className='small-compact text-s3 uppercase'>{item.role}</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialItem;
