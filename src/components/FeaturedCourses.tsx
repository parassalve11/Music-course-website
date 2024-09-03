"use client";
import { BackgroundGradient } from './ui/background-gradient'
import Image from 'next/image'
import { Button } from './ui/moving-border';
import Link from 'next/link';
import courseData from '../data/music_courses.json'

interface Courses{
    id: number,
    title: string,
    description: string,
    slug: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
    image: string,
}


export default function FeaturedCourses() {
 const featuredCourses  =   courseData.courses.filter((course: Courses) => course.isFeatured)

  return (
    <div >
        <div className='min-h-screen w-full flex items-center gap-10  flex-col bg-black'>
        <div className='section-1 mt-20'>
            <h1 className='uppercase text-green-800  font-bold text-lg'>Featured Courses</h1>
        </div>
        <div className='section-2'>
            <h1 className='text-5xl font-bold '>Learn With the Best</h1>
        </div>
        <div className='section-3 flex flex-wrap items-center justify-center mt-6 gap-10'>
        {featuredCourses.map((course: Courses) => (
            <div key={course.id} className=''>
                  <div>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-slate-900 dark:bg-zinc-900">
        <Image
          src={course.image}
          alt="jordans"
          height="100"
          width="300"
          className="object-contain overflow-hidden rounded-lg "
        />
        <p className="text-base sm:text-xl text-slate-100 mt-4 mb-2 dark:text-neutral-200">
        {course.title}
        </p>
 
        <p className="text-sm text-slate-400 dark:text-neutral-400">
        {course.description}
        </p>
       <Link href={`/courses/${course.slug}`}>
       <button className="rounded-lg w-full mt-10 p-2 text-black bg-white flex items-center justify-center text-sm font-bold dark:bg-zinc-800">
          <span >Learn more</span>
        
        </button>
       </Link>
      </BackgroundGradient>
    </div>
            </div>
        ))}
        </div>
      <Link href={'/courses'}>
      <div className="section-4 "><Button className='bg-black font-semibold '>View All Courses</Button> </div>

      </Link>
        </div>



    </div>
  )
}
