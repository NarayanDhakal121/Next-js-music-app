'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards"


const musicTestimonials=[
    {
        "name": "John Doe",
        "quote": "Music is the universal language of mankind.",
        "title": "Harmony in Notes"
      },
      {
        "name": "Jane Smith",
        "quote": "Without music, life would be a mistake.",
        "title": "Melodic Journey"
      },

      {
  "name": "Alex Turner",
  "quote": "Music can change the world because it can change people.",
  "title": "Rhythmic Revolution"
},

{
    "name": "Ella Fitzgerald",
    "quote": "The only thing better than singing is more singing.",
    "title": "Soulful Serenade"
  },

  {
    "name": "Miles Davis",
    "quote": "Don't play what's there; play what's not there.",
    "title": "Jazz Odyssey"
  },

  {
    "name": "Ludwig van Beethoven",
    "quote": "Music is a higher revelation than all wisdom and philosophy.",
    "title": "Symphonic Enlightenment"
  },

  {
  "name": "Nina Simone",
  "quote": "I'll tell you what freedom is to me: no fear.",
  "title": "Soulful Liberation"
},

{
    "name": "Bob Marley",
    "quote": "One good thing about music, when it hits you, you feel no pain.",
    "title": "Reggae Harmony"
  },

  {
    "name": "Freddie Mercury",
    "quote": "The show must go on.",
    "title": "Rock Anthem"
  },
  
  
  {
    "name": "Adele",
    "quote": "Sometimes it lasts in love, but sometimes it hurts instead.",
    "title": "Emotional Ballad"
  }
  
]

function TestimonialCards() {
  return (
    // for grid background
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        
        <h2 className="text-3xl font-bold text-center mb-8  mt-5  text-white z-10">Hear our Harmony: Voices of Suscess</h2>
        <div className="flex justify-center w-full max-w-6xl">
            <InfiniteMovingCards items={musicTestimonials} direction="right" speed="slow"/>
        </div>
    </div>
  )
}

export default TestimonialCards