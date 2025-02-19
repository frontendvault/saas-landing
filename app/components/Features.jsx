'use client' // components/Carousel.js
import { useEffect, useRef } from 'react'
import Slider from 'react-slick'

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
      description: 'Engage in hands-on learning experiences.'
    },
    {
      id: 2,
      title: 'Course Catalog',
      description: 'Explore a wide variety of courses.'
    },
    {
      id: 3,
      title: 'Track Your Progress',
      description: 'Stay on track with your learning goals.'
    },
    {
      id: 4,
      title: 'Earn Certifications',
      description: 'Get certified in various fields.'
    },
    {
      id: 5,
      title: 'Live Classes',
      description: 'Join live sessions with instructors.'
    },
    {
      id: 6,
      title: 'Expert Tutors',
      description: 'Learn from experienced educators.'
    }
  ]

  return (
    <section className='py-16'>
      <div className='container mx-auto px-4 relative'>
        <h2 className='text-5xl text-center mb-20 font-bold'>Exclusive  Features</h2>
        {/* Slick Slider */}
        <Slider {...settings} ref={sliderRef}>
          {itemCarousel.map((item) => (
            <div className='p-4 bg-white rounded-lg shadow-lg text-center' key={item.id}>
              <h3 className='text-2xl font-semibold text-gray-800'>
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
          className='absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 focus:outline-none'
          onClick={() => sliderRef.current.slickPrev()}
        >
          &lt;
        </button>
        <button
          className='absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 focus:outline-none'
          onClick={() => sliderRef.current.slickNext()}
        >
          &gt;
        </button>
      </div>
    </section>
  )
}

export default Features
