import { workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/MovingBorder'

export default function Experience() {
  return (
    <section id='experience' >
            <h1 className=' heading capitalize'>my {' '} 
            <span className=' text-purple'>work experience</span>
            </h1>

            <div className=' w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10'>
                {workExperience.map((single)=>(
                    
                        <Button key={single.id} className=' flex-1 text-white border-neutral-100 dark:border-slate-800' >
                           <div className='flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
                            <img src={single.thumbnail} alt={single.title} className=' lg:w-32 md:w-20 w-16' />
                            <div className=' lg:ms-5'>
                                <h1 className=' text-start text-xl md:text-2xl font-bold'>{single.title}</h1>
                                <p className='text-start font-semibold mt-3 text-white-100'>{single.desc}</p>
                            </div>
                            </div> 
                        </Button>
                    
                ))}
            </div>
    </section>
  )
}
