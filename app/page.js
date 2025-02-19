import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'font-awesome/css/font-awesome.min.css'
import './globals.css'
import Banner from './components/Banner'
import Services from './components/Services'
import RemoteLearning from './components/RemoteLearning'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import Courses from './components/Courses'

export default function Home () {
  return (
    <>
      <Banner />
      <Services/>
      <Features/>
      <Courses/>
      <RemoteLearning/>
      <Testimonials/>
      <Pricing/>
    </>
  )
}
