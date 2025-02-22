import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'font-awesome/css/font-awesome.min.css'
import './globals.css'
import Banner from './components/Banner'
import Services from './components/Services'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import Courses from './components/Courses'
import About from './components/About'

export default function Home () {
  return (
    <>
      <Banner />
      <About/>
      <Features/>
      <Courses/>
      <Services/>
      <Testimonials/>
      <Pricing/>
    </>
  )
}
