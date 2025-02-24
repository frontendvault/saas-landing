'use client'
import { useEffect, useRef } from 'react'
import Slider from 'react-slick'
import { LuBrainCircuit, LuChartNoAxesCombined } from "react-icons/lu";
import { FaArrowLeft, FaArrowRight, FaChartPie } from 'react-icons/fa';
import { PiCertificateBold } from 'react-icons/pi';
import { MdGroups2, MdLiveTv } from 'react-icons/md';


const Features = () => {
  const sliderRef = useRef(null)

  const settings = {
    dots: true, // Show navigation dots
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show 4 items at once
    slidesToScroll: 1, // Scroll one item at a time
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3 // 3 items on medium-sized screens
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // 1 item on small screens
          dots: false // Disable dots on small screens
        }
      }
    ]
  }

  const itemCarousel = [
    {
      id: 1,
      title: 'Interactive Learning',
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, animi. Illum, amet eius iusto sint adipisci suscipit quasi sit nostrum voluptatem aspernatur ratione soluta reiciendis. ",
      icon:<LuBrainCircuit/>

    },
    {
      id: 2,
      title: 'Course Catalog',
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, animi. Illum, amet eius iusto sint adipisci suscipit quasi sit nostrum voluptatem aspernatur ratione soluta reiciendis. ",
      icon:<FaChartPie/>

    },
    {
      id: 3,
      title: 'Track Your Progress',
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, animi. Illum, amet eius iusto sint adipisci suscipit quasi sit nostrum voluptatem aspernatur ratione soluta reiciendis. ",
      icon:<LuChartNoAxesCombined/>
    },
    {
      id: 4,
      title: 'Earn Certifications',
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, animi. Illum, amet eius iusto sint adipisci suscipit quasi sit nostrum voluptatem aspernatur ratione soluta reiciendis. ",
      icon:<PiCertificateBold/>
    },
    {
      id: 5,
      title: 'Live Classes',
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, animi. Illum, amet eius iusto sint adipisci suscipit quasi sit nostrum voluptatem aspernatur ratione soluta reiciendis. ",
      icon:<MdLiveTv/>
    },
    {
      id: 6,
      title: 'Expert Tutors',
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, animi. Illum, amet eius iusto sint adipisci suscipit quasi sit nostrum voluptatem aspernatur ratione soluta reiciendis. ",
      icon:<MdGroups2/>
    }
  ]

  return (
    <section className='py-10 md:py-28' id='features'>

      <div className='container mx-auto px-4 relative '>
        <h2 className='text-4xl text-center mb-20 font-bold'>Exclusive  Features</h2>
        {/* Slick Slider */}
        <Slider {...settings} ref={sliderRef} className='mb-20'>
          {itemCarousel.map((item) => (
            <div className='p-4  rounded-lg  text-center my-4' key={item.id}>
              <span className='text-center text-7xl text-orange-400 flex justify-center'>{item.icon}</span>
              <h3 className='text-xl font-bold text-gray-800 mt-5 mb-5'>
                {item.title}
              </h3>
              <p className='text-gray-500 mt-2'>
                {item.description}
              </p>
            </div>
          ))}
        </Slider>

        {/* Custom Navigation Arrows */}
        <button
          className='absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 focus:outline-none h-8 w-8'
          onClick={() => sliderRef.current.slickPrev()}
        >
          <FaArrowLeft/>
        </button>
        <button
          className='absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 focus:outline-none h-8 w-8'
          onClick={() => sliderRef.current.slickNext()}
        >
          <FaArrowRight/>
        </button>
      </div>
    </section>
  )
}

export default Features
