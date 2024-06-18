import { companies, testimonials } from '@/data'
import React from 'react'
import { InfiniteMovingCards } from './ui/InfinitMovingCard'

export default function Clients() {
  return (
    
    <section id='testimonials'>
        <div className='py-20'>
            <h1 className=' heading capitalize'>kind word from {' '} 
            <span className=' text-purple'>satisfied cliets</span>
            </h1>

            <div className=' flex flex-col items-center max-lg:mt-10'>
              <InfiniteMovingCards items={testimonials} direction={'right'} speed={'slow'}/>

              <div className=' flex flex-wrap gap-5 items-center justify-center md:gap-16 max-lg:mt-10'>
                {companies.map((single)=>(
                  <div key={single.id} className=' flex md:max-w-60 max-w-32 gap-2'>
                    <img src={single.img} alt={single.name} className=' md:w-10 w-5' />
                    <img src={single.nameImg} alt={single.name} className=' md:w-24 w-20' />
                  </div>
                ))}
              </div>
              

            </div>
        </div>
    </section>
  )
}
