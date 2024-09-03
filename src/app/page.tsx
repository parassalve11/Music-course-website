import About from "@/components/About";
import FeaturedCourses from "@/components/FeaturedCourses";
import FeaturedWebinare from "@/components/FeaturedWebinare";
import HeroSection from "@/components/HeroSection";
import MeetOurIntructor from "@/components/MeetOurIntructor";
import TestimoniyalCard from "@/components/TestimoniyalCard";
import WhyChooseUs from "@/components/WhyChooseUs";
import { TracingBeam } from "@/components/ui/tracing-beam";


export default function Home() {
  return (
   <div>
    <h1 className="text-2xl text-center my-7 font-semibold p-4">Chai aor code</h1>
    <TracingBeam >
    <HeroSection/>
    <FeaturedCourses />
    <WhyChooseUs />
    <TestimoniyalCard />
    <FeaturedWebinare />
    <MeetOurIntructor />
    <About />
    </TracingBeam>
   </div>
   
  )
}
