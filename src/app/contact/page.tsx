"use client"
import { BackgroundBeams } from '@/components/ui/background-beams';
import Link from 'next/link';
import React, { useState, ChangeEvent } from 'react';

const Page: React.FC = () => {
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubjectChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSubject(e.target.value);
  };

  const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  return (
    <div className="h-screen w-full rounded-md bg-black relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-8xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Contact Us
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
        Discover our passion for creativity and innovation at [Website Name]. We are dedicated to crafting unique experiences that captivate and inspire. Through our commitment to excellence, we strive to redefine industry standards and exceed expectations
        </p>
        <input
          type="text"
          value={email}
          onChange={onEmailChange}
          placeholder="Enter your email ..."
          className="rounded-lg  h-14 border-2 p-3 border-slate-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
        />
        <input
          type="text"
          value={subject}
          onChange={onSubjectChange}
          placeholder="Enter your subject ..."
          className="rounded-lg  h-14 border-2 p-3 border-slate-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
        />
        <textarea name="message" id="message" value={message} onChange={onMessageChange} cols={30} placeholder='Enter your message ...' rows={10} className='rounded-lg  h-28 border-2 border-slate-800 focus:ring-2 focus:ring-teal-500 p-3 w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700'></textarea>
        <Link
          href={`mailto:${email}?subject=Regarding ${subject}&body=${message}`}
          className='bg-slate-700 text-white mt-20 text-center p-3 uppercase rounded-lg hover:opacity-95'
          >
            Send Message          
          </Link>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default Page;
