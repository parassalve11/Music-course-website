import Link from "next/link"


export default function About() {
  return (
    <div>
        <div className="h-[50vh] capitalize flex flex-warp   justify-between p-28 px-40">
            <ul className="max-w-xs text-lg font-semibold  ">About Us 
                <p className="text-xs mt-2 text-slate-500  " >Discover our passion for creativity and innovation at [Website Name]. We are dedicated to crafting unique experiences that captivate and inspire. Through our commitment to excellence, we strive to redefine industry standards and exceed expectations. Join us on a journey of exploration and discovery as we push the boundaries of possibility. Welcome to a world where imagination knows no bounds.</p>
                </ul>
            <ul className="max-w-xs text-lg font-semibold  ">Quick Links
           <div className="text-xs mt-2 text-slate-500 ">
          <Link href={'/'}>
          <li>Home</li>
          </Link>
            <li>About</li>
            <Link href={'courses'}>
            <li>Courses</li>
            </Link>
            <li>Contract</li>
           </div>
            </ul>
            <ul className="max-w-xs text-lg font-semibold  ">Follow Us
            <div className="text-xs mt-2 text-slate-500 ">
           <Link href={'https://www.instagram.com/'}>
           <li>Instagram</li>
           </Link>
            <Link href={'https://www.twitter.com/'}>
            <li>Twitter</li>
            </Link>
          <Link href={'https://www.facebook.com/'}>
          <li>FaceBook</li>
          </Link>
           
           </div>
            </ul>
            <ul className="max-w-xs text-lg font-semibold  ">Contact Us
                <div className="text-xs mt-2 text-slate-500 ">
                <li>+9167586939</li>
                </div>
            </ul>
        </div>
    </div>
  )
}
