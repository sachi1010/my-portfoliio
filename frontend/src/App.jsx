import {useEffect} from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import MyWork from './Components/MyWork/MyWork'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
const App = () => {

   useEffect(() => {
    AOS.init({ duration: 1000, });
  }, []);

  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <MyWork/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
