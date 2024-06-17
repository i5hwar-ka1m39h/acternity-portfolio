import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'
import { it } from 'node:test'

export default function Grid() {
  return (
    <section className='about'>
        <BentoGrid>
            {gridItems.map(({ id, title, description,className,imgClassName,titleClassName, img,spareImg,})=>(
                <BentoGridItem title={title} description={description} key={id}
                 id={id} className={className} img={img} imgClassName={imgClassName} titleClassName={titleClassName} spareImg={spareImg}/>
            ))}
        </BentoGrid>
    </section>
  )
}
