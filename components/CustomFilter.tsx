"use client";
import { Fragment, useState } from "react"
import { CustomFilterProps } from "@/types"
import { useRouter } from "next/navigation";
import { Listbox, Transition } from "@headlessui/react"
import Image from "next/image";
import { updateSearchParams } from "@/utils";

const CustomFilter = ({ title, options}: CustomFilterProps) => {

  const router = useRouter();
  const [selected, setSelected] = useState(options[0])

  const handleUpdateParams = (e: { title: string; value: string }) => {
    const newPathName = updateSearchParams(title, e.value.toLowerCase());
    router.push(newPathName);
  };
  
  return (
    <div className="w-fit">
      <Listbox
       value={selected}
       onChange={(e) => {
        setSelected(e); // Update the selected option in state
        handleUpdateParams(e);
       }}>
        <div className="relative w-fit z-10">
          <Listbox.Button className='custom-filter__btn'>
            <span className='block truncate'>{selected.title}</span>
            <Image src='/chevron-up-down.svg' width={20} height={20} className='ml-4 object-contain' alt='chevron_up-down' />
            <Transition
            as={Fragment} // group multiple elements without introducing an additional DOM node i.e., <></>
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
            >
              <Listbox.Options className='custom-filter__options'>
                {
                  options.map((option)=> (
                    <Listbox.Option
                    className={({ active }) =>
                    `relative cursor-default select-none py-2 px-4 ${
                      active ? "bg-primary-blue text-white" : "text-gray-900"
                    }`
                  }
                    key={option.title}
                    value={option}>
                      {({ selected }) => (
                    <>
                      <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`} >
                        {option.title}
                      </span>
                    </>
                  )}
                    </Listbox.Option>
                  ))
                }
              </Listbox.Options>
            </Transition>
          </Listbox.Button>
        </div>
      </Listbox>
    </div>
  )
}

export default CustomFilter