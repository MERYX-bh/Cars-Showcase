"use client"
import Image from 'next/image'
import { CustomButton } from '@/components'
import { generateCarImageUrl } from '@/utils'

const Hero = () => {
    const handleScroll = () => {

    }
  return (
    <div className='hero'>
        <div className="flex-1 pt-36 padding-x">
        <h1 className='hero__title'>
            Find, Book or rent a Car quickly and easily
        </h1>

        <p className='hero__subtitle'>
            Streamline your car rental experience with our effortless 
            booking process.
        </p>
        <CustomButton
        title="Find your car"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}/>
        </div>
        <div className='hero__image-container'>
          <div className='hero__image'>
            <Image src='/hero.png' alt='' fill className='object-contain'/>
          </div>
          <div className="hero__image-overlay" />
        </div>
    </div>
  )
}

export default Hero