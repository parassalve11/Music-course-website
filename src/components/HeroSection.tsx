import Link from 'next/link'
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { Button } from './ui/moving-border'


export default function HeroSection() {
  return (
    
    <div className='relative h-auto w-full md:h-[40rem] flex flex-col items-center justify-center 
    rounded-md py-10 md:py-0 mx-auto'>
        <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
        <div className='p-4 relative z-10 w-full text-center'>
            <h1 className='text-8xl font-bold capitalize'>Master the art of music.</h1>
            <p className='my-10 text-lg font-normal tracking-6xl capitalize'>Dive into our comprehensive music courses and transform <br /> your musical journey today. Whether you're a beginner or <br /> looking to refine your skills, join us to unlock your true <br /> potential.</p>
            <div className='mt-4 uppercase font-semibold'>
                <Link  href={'/courses'}>
                    <p className='px-20'><Button duration={2000} className='uppercase px-20 w-24 tracking-wider text-sm bg-black hover:opacity-90'>Explore Courses</Button></p>
                </Link>
            </div>
        </div>
    </div>
  )
}
