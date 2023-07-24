import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCalendarDays, faQuoteRight} from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

const Testimonials = () => {
  return (
  <div className='grid 2xl:grid-cols-2 xl:grid-cols-2 md:grid-cols-1 grid-cols-1 w-full gap-8 pt-6 pb-6'>
      <div className='mt-6 shadow-xl pb-8 px-8'>
      <div className="mt-5 px-8">
        <p className='font-bold text-[22px]'>
          "We rented a car from this website and had an amazing
          experience! The booking was easy and the rental rates were
          very affordable. "
        </p>  
        <div className='flex justify-between items-center mt-4'>
        <div className='flex items-center'>
        <div>
            <Image
            src='/pfp1.jpg'
            alt='test img'
            width={65}
            height={65}
            className='rounded-full mr-3'/>
          </div>
          
          <div className=''>
            <h1 className='font-black text-[16px]'>
              Harry Potter
            </h1>
            <h2>Belgrade</h2>
          </div>
        </div>
        <div className='order-last'>
          <FontAwesomeIcon icon={faQuoteRight} className='w-20 text-primary-blue'/>
        </div>
        </div>
      </div>
    </div>


    <div className='mt-6 shadow-xl pb-8 px-8'>
      <div className="mt-5 px-8">
      <p className='font-bold text-[23px]'>
      "The car was in great condition and made our trip even better. Highly recommend for this car rental website!"
        </p>  
        <div className='flex justify-between items-center mt-4'>
        <div className='flex items-center'>
        <div>
            <Image
            src='/pfp2.jpg'
            alt='test img'
            width={65}
            height={65}
            className='rounded-full mr-3'/>
          </div>
          
          <div>
            <h1 className='font-black text-[16px]'>
              Ron Rizzli
            </h1>
            <h2>Novi Sad</h2>
          </div>
        </div>
        <div>
          <FontAwesomeIcon icon={faQuoteRight} className='w-20 text-primary-blue'/>
        </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Testimonials