import './App.css'
import Navbar from "./components/Navbar"
import Home from './components/pages/Home'
import About from './components/pages/About'
import Savory from './components/pages/Savory'
import Sweets from './components/pages/Sweets'
import Drinks from './components/pages/Drinks'
import Contact from './components/pages/Contact'
import Menu from './components/pages/Menu'
import { Route, Routes } from 'react-router-dom'


function App() {

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
    
    <Navbar scrollToSection={scrollToSection}/>
    <div className="container">
    <Home scrollToSection={scrollToSection}/>
    <About />
    <Menu />
    <Routes path="/">
	    <Route path='/savory' element={<Savory />} />
      <Route path='/sweets' element={<Sweets />} />
      <Route path='/drinks' element={<Drinks />} />
	    
    </Routes>

    <Contact />
    
    
    

    </div>
     
    </>
  )
}

export default App
