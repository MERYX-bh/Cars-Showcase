"use client"
import { useState } from 'react'
import SearchManufacturer from '@/components/SearchManufacturer'

const SearchBar = () => {
const [Manufacturer, setManufacturer] = useState('')

const handleSearch = () => {

}
   return (
    <form className="searchbar">
        <div className='searchbar__item'>
            <SearchManufacturer
            Manufacturer={Manufacturer}
            setManufacturer={setManufacturer}/>
        </div>
    </form>
  )
}

export default SearchBar