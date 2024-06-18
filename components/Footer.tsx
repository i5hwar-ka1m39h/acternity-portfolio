import React from 'react'
import BorderMagicBtn from './ui/BorderMagicBtn'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'

export default function Footer() {
  return (
    <footer className='w-full mb-[100px] md:mb-5 pb-10' id='contact'>
        

        <div className=' flex flex-col items-center'>
            <h1 className='heading lg:max-w-[45vw] capitalize text-center'>take <span className=' text-purple'> your digital presence </span>to the next level</h1>
            <p className=' capitalize text-center text-white-200 md:mt-10 my-5'>Reach out to me today and we can discuss how can i help you acheive you goal</p>
            <a href="mailto:ishwarkalmegh156@gmail.com">
                <BorderMagicBtn title={'Contact me'} icon={<FaLocationArrow/>} side='right' />
            </a>
        </div>

        <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
            <p className='md:text-base text-sm md:font-normal font-light'>Copyrigth © 2024 Ishwar Kalmegh </p>

            <div className='flex items-center md:gap-3 gap-6 mt-2'>
                {socialMedia.map((single)=>(
                    <div key={single.id} className=' w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturated-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
                        <a href=""><img src={single.img} alt='social' width={20} height={20} /></a>
                    </div>
                ))}
            </div>
        </div>
    </footer>
  )
}
