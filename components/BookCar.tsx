import React from 'react'
import CustomButton from './CustomButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCalendarDays, faLocationDot} from '@fortawesome/free-solid-svg-icons'

const BookCar = () => {
  return (
    <div className='shadow-xl p-5 rounded-md '>
        <h1 className='font-bold text-[26px]'>Book a Car</h1>
        <form className='grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-5 m-2'>
            <div>
            <label className='text-gray-900 font-bold mb-3'>Select Your Car Type :</label><br/>
            <select className='w-full text-gray-600 mt-3 p-2 pr-14 border border-blue-200'>
                <option>Select your car type</option>
                <option value="Audi A1 S-Line">Audi A1 S-Line</option>
                <option value="VW Golf 6">VW Golf 6</option>
                <option value="Toyota Camry">Toyota Camry</option>
                <option value="BMW 320 ModernLine">
                    BMW 320 ModernLine
                </option>
                <option value="Mercedes-Benz GLK">Mercedes-Benz GLK</option>
                <option value="VW Passat CC">VW Passat CC</option>
            </select>
            </div>

            <div>
            <label className='text-gray-900 font-bold flex'> <FontAwesomeIcon icon={faLocationDot} className='text-primary-blue w-4 mr-2'/>Pick up: &nbsp;<b className='text-red-500'> *</b></label>
            <select className='w-full text-gray-600 mt-3 p-2 pr-14 border border-blue-200'>
            <option>Select pick up location</option>
                    <option>Belgrade</option>
                    <option>Novi Sad</option>
                    <option>Nis</option>
                    <option>Kragujevac</option>
                    <option>Subotica</option>
            </select>
            </div>

            <div>
            <label className='text-gray-900 font-bold flex'> <FontAwesomeIcon icon={faLocationDot} className='text-primary-blue w-4 mr-2'/>Drop Of: &nbsp;<b className='text-red-500'> *</b></label>
            <select className='w-full text-gray-600 mt-3 p-2 pr-14 border border-blue-200'>
            <option>Select drop off location</option>
                    <option>Novi Sad</option>
                    <option>Belgrade</option>
                    <option>Nis</option>
                    <option>Kragujevac</option>
                    <option>Subotica</option>
            </select>
            </div>

            <div>
            <label className='text-gray-900 font-bold flex '><FontAwesomeIcon icon={faCalendarDays} className='text-primary-blue w-5 mr-2'/> Pick Up &nbsp;<b className='text-red-500'> *</b></label>
            <input className='w-full text-gray-600 mt-3 p-2 pr-14 border border-blue-200'
                    id="droptime"
                    type="date"
                  ></input>
            </div>

             <div>
             <label className='text-gray-900 font-bold flex items-center'><FontAwesomeIcon icon={faCalendarDays} className='text-primary-blue w-5 mr-2'/> Drop Of &nbsp;<b className='text-red-500'> *</b></label>
            <input className='w-full text-gray-600 mt-3 p-2 pr-14 border border-blue-200'
                    id="droptime"
                    type="date"
                  ></input>
            </div>

            <CustomButton
            btnType='button'
            title='Search'
            containerStyles='w-full bg-primary-blue rounded-md mt-9'
            textStyles='text-white text-[14px] leading-[17px] font-bold'/>        
        </form>
    </div>
  )
}

export default BookCar