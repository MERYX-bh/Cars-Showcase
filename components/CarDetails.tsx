"use client";
import {Fragment} from 'react'
import Image from 'next/image';

import { Dialog , Transition} from '@headlessui/react';
import { CarProps } from '@/types';

interface CarDetailsProps {
    isOpen: boolean;
    closeModal: () => void;
    car: CarProps;
}

const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => {
  return (
    <>
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10"
      onClose={closeModal}>
        <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leave='ease-in duration-200'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'>
          <div className='fixed inset-0 bg-black bg-opacity-25'/>
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center
          p-4 text-center'>
        <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-out duration-300'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className="relative w-full max-w-lg
              max-h-[90vh] overflow-y-auto rounded-2xl transform 
              bg-white text-left shadow-xsl transition-all flex 
              flex-col gap-5">
                <button
                type='button'
                onClick={closeModal}>
                  <Image
                  src="/close.svg"
                  alt='close icon'
                  width={20}
                  height={20}
                  className='object-contain'/>
                </button>
                <div className='flex flex-1 flex-col gap-3'>
                  <div className="relative w-full bg-cover bg-pattern h-40">

                  </div>
                </div>
              </Dialog.Panel>
        </Transition.Child>
          </div>
        </div>
        
      </Dialog>
    </Transition>
    </>
  )
}

export default CarDetails