"use client";
import React from 'react'
import { useRouter } from 'next/navigation'
import { ShowMoreProps } from '@/types'
import CustomButton from './CustomButton';
import { updateSearchParams } from '@/utils';

const ShowMore = ({pageNumber, isNext}: ShowMoreProps) => {
  const router = useRouter();
  const handleNavigation = () => {
    
    const newLimit = (pageNumber + 1) * 10;
    const newPathname = updateSearchParams("limit", `${newLimit}`)

    router.push(newPathname);
  }
  return (
    <div className='w-full flex-center gap-5 mt-10'>
       {!isNext && (
      <CustomButton
          btnType="button"
          title="Show More"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
        )}
    </div>
  )
}

export default ShowMore