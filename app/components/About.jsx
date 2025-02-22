
import Image from 'next/image'
import {
  FaCheckCircle,
  FaCode,
  FaLaptopCode,
  FaMobile,
  FaMobileAlt,
  FaTabletAlt
} from 'react-icons/fa'

const About = () => {
  return (
    <section className='py-16 bg-gray-100 md:h-screen flex items-center' id='about'>
      <div className='container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
        <div className='flex flex-col justify-center'>
         <Image src="/responsive.svg" height={350} width={350} alt="Learn from anywhere" className='mx-auto' />
        </div>

        <div>
          <h2 className='text-4xl font-bold text-gray-800 mb-8'>
            Learn Online, Anytime, Anywhere
          </h2>
          <p className='text-lg mb-10'>
            We don’t just work with code and algorithms—we work with people. Our
            approach combines technical excellence with collaboration, ensuring
            scalable, intelligent solutions that drive innovation.
          </p>

          <div className='grid md:grid-cols-2 gap-6'>
            <h3 className='text-xl font-semibold text-green-800 flex items-center'>
              {' '}
              <FaCheckCircle className='mr-2 ' /> Top Instructors
            </h3>
            <h3 className='text-xl font-semibold text-green-800 flex items-center'>
              <FaCheckCircle className='mr-2 ' /> 6,000 Membership
            </h3>
            <h3 className='text-xl font-semibold text-green-800 flex items-center'>
              <FaCheckCircle className='mr-2 ' /> 3,020 Online Courses
            </h3>
            <h3 className='text-xl font-semibold text-green-800 flex items-center'>
              <FaCheckCircle className='mr-2 ' /> Online Certifications
            </h3>
          </div>
          <button className='bg-green-700 hover:bg-green-800 ease-in-out duration-200 py-2 px-6 rounded-full text-white font-medium uppercase mt-10'>
            Find Out more{' '}
          </button>
        </div>
      </div>
    </section>
  )
}

export default About
