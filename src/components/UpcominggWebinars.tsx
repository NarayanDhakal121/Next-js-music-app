'use client'
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect"

function UpcominggWebinars() {

   const featuredWebinars = [
        {
          "title": "The Art of Coding",
          "description": "Unlock the secrets of elegant algorithms and efficient code.",
          "slug": "art-of-coding",
          "isFeatured": true
        },
        {
          "title": "Designing User Experiences",
          "description": "Crafting intuitive interfaces that delight users.",
          "slug": "ux-design",
          "isFeatured": true
        },
        {
          "title": "Data Science Insights",
          "description": "Exploring patterns and making sense of data.",
          "slug": "data-science",
          "isFeatured": true
        },
        {
          "title": "Creative Writing Corner",
          "description": "Where words dance and stories come alive.",
          "slug": "creative-writing",
          "isFeatured": true
        },
        {
          "title": "Photography Showcase",
          "description": "Capturing moments through the lens.",
          "slug": "photography",
          "isFeatured": true
        },
        {
          "title": "Music Notes",
          "description": "Harmonies, melodies, and lyrical journeys.",
          "slug": "music-notes",
          "isFeatured": true
        }
      ]



  return (
    <div className="p-12 bg-gray-900 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
            <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase ">FEATURED WEBINARS</h2>
            <p className="mt-4 font-normal text-base md:text-lg 
text-neutral-300 max-w-lg mx-auto">Enhance Your Musical Journey</p>
        </div>

         {/* --------------hover effect------------ */}
        <div className="mt-10">
<HoverEffect items={featuredWebinars.map(webinar=>(
    {
      title: webinar.title,
      description: webinar.description,
      link: '/'  
    }
))}/>

        </div>
        <div className="mt-10 text-center align-center">
        <Link href ={"/"}
        className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
        >
        View All  Webinars
        </Link>
    </div>
    </div>
    </div>
  )
}

export default UpcominggWebinars