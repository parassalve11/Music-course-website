"use client";
import React from 'react'

import { HoverEffect } from './ui/card-hover-effect';
import { Button } from './ui/moving-border';
import Link from 'next/link';

export default function FeaturedWebinare() {
   
  return (
    <div className=''>
        <div className='w-[70vw]  absolute  left-[17%]   border-t-4 border-t-black'></div>
       <div className='main min-h-screen w-full border-2  border-white p-9 '>
        
       <div className="section-1 flex items-center  flex-col gap-8">
       
        <div className='uppercase font-semibold text-xl text-center w-full '>featured webinars</div>
        <div className='text-5xl font-semibold capitalize'>Enhance Your Musical journey</div>
      
        <div className="w-full mx-auto  px-8 ">
        <HoverEffect className=''  items={projects} />
        </div>
        <Link href={'/'} >
        <Button className='capitalize flex items center w-full justify-center border border-black bg-white text-black  hover:opacity-90'>View all webinars</Button>
        </Link>

       </div>
       
       </div>
    </div>
  )
}
const projects = [
    {
      title: "Stripe",
      description:
        "A technology company that builds economic infrastructure for the internet.",
      link: "https://stripe.com",
    },
    {
      title: "Netflix",
      description:
        "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
      link: "https://netflix.com",
    },
    {
      title: "Google",
      description:
        "A multinational technology company that specializes in Internet-related services and products.",
      link: "https://google.com",
    },
    {
      title: "Meta",
      description:
        "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
      link: "https://meta.com",
    },
    {
      title: "Amazon",
      description:
        "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
      link: "https://amazon.com",
    },
    {
      title: "Microsoft",
      description:
        "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
      link: "https://microsoft.com",
    },
  ];