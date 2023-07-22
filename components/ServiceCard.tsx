import React from 'react'
import CustomButton from './CustomButton'
import { ServiceProps } from '@/types'

const ServiceCard = ({title, value}: ServiceProps) => {
    return (
        <div className='flex p-3 bg-primary-blue-100 hover:bg-white hover:shadow-md rounded-xl'>
          <div className='flex-grow m-4'>
            <h1 className='font-bold capitalize text-[30px]'>{title}</h1>
            <p className='text-[14px]'>{value}</p>
            <CustomButton
              btnType='button'
              title='Read more'
              containerStyles='py-[16px] bg-primary-blue rounded-md mt-5'
              textStyles='text-white text-[14px] leading-[17px] font-bold'
            />
          </div>
        </div>
      )
    }

export default ServiceCard