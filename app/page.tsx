import { Hero, ServiceCard } from '@/components'
import Image from 'next/image'
import {SearchBar, CustomFilter, CarCard, ShowMore } from '@/components'
import { fetchCars } from '@/utils'
import { HomeProps } from '@/types'
import { fuels, yearsOfProduction, services } from "@/constants";

export default async function Home({ searchParams }: HomeProps) {
const allCars = await fetchCars({
  manufacturer: searchParams.manufacturer || "",
  year: searchParams.year || 2022,
  fuel: searchParams.fuel || "",
  limit: searchParams.limit || 10,
  model: searchParams.model || "",
});

const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  return (
    <main className='overflow-hidden'>
    <Hero />

    <div className='mt-12 padding-x padding-y max-width' id='discover'>
      <div className='home__text-container'>
        <h1 className='text-4xl font-extrabold'>Services</h1>
        <p>We invite you to try our services and we personnaly guarentee that you will e completly satisfied.</p>
      </div>
      <div className='grid 2xl:grid-cols-4 xl:grid-cols-2 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14'>
      {services.map((service, index) => (
        <ServiceCard key={index} title={service.title} value={service.values} />
      ))}
      </div>
    </div>

    <div className='mt-12 padding-x padding-y max-width' id='discover'>
      <div className='home__text-container'>
        <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
        <p>Explore out cars you might like</p>
      </div>

      <div className='home__filters'>
        <SearchBar />

        <div className='home__filter-container'>
          <CustomFilter title='Fuels' options={fuels}/>
          <CustomFilter title='Years' options={yearsOfProduction}/>
        </div>
      </div>

      {!isDataEmpty ? (
        <section>
          <div className='home__cars-wrapper'>
            {allCars?.map((car) => (
              <CarCard car={car} />
            ))}
          </div>
          <ShowMore
          pageNumber={(searchParams.limit || 10) / 10}
          isNext={(searchParams.limit || 10) > allCars.length}
          />
        </section>
      ) : (
        <div className='home__error-container'>
          <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
          <p>{allCars?.message}</p>
        </div>
      )}
    </div>
    

    <div className='mt-12 padding-x padding-y max-width' id='discover'>
      <div className='home__text-container'>
        <h1 className='text-4xl font-extrabold'>Only today 75$/day</h1>
        <p>We invite you to try our services and we personnaly guarentee that you will e completly satisfied.</p>
      </div>
    </div>
  </main>
  )
}
