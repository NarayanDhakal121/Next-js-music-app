import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import ChooseUS from "@/components/ChooseUS";
import TestimonialCards from "@/components/TestimonialCards";
import UpcominggWebinars from "@/components/UpcominggWebinars";
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";

export default function Home() {
  return (
   <main className="min-h-screen bg-black/[0.96]
   antialiased bg-grid-white/[0.02]">
    <h1 className='text-2xl text-start text-white/[2] p-20'>MUSIC _ONOUR</h1>
    <HeroSection />
    <FeaturedCourses />
    <ChooseUS />
    <TestimonialCards />
    <UpcominggWebinars /> 
    <Instructors />
    <Footer />
   </main>
  );
}
