"use client"
import React from 'react'

import useEmblaCarousel from 'embla-carousel-react'
import {

  EmblaOptionsType
} from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import bet1 from "../../../static/bet1.png"
import bet2 from "../../../static/bet2.png"
import bet3 from "../../../static/bet3.png"
import bet4 from "../../../static/bet4.png"

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef] = useEmblaCarousel(options,[Autoplay()])
  const bet =[bet1,bet2,bet3,bet4]
  return (
    <section className="embla" dir="rtl">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
   <Image src={bet[index]} className='rounded-md' alt={`1xbet`} width={350} />
              
              
             
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
