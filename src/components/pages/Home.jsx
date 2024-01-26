import React from 'react'
import './Home.css'
import homevid from './mediapage/homevid.mp4'
import homelogo from './mediapage/bclogo.png'

const Home = ({ scrollToSection }) => {
  return (
    <>
     <div className="Home" >

     <img src={homelogo}/>
     <p>At B.C Cakes, we embark on a delightful journey to transform your dream pastries into sweet realities. Our skilled baker blend passion and creativity to craft memorable confections, ensuring every bite is a celebration of your unique vision. Trust us to turn your sweet dreams into delectable treats that captivate the senses and make your special moments truly extraordinary.</p>
     <div className="video-container">
            <video controls={false} autoPlay loop muted>
              <source src={homevid} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
          </div>
         

          

            <div className="homeBut">
          <button onClick={() => scrollToSection('Contact')}>ORDER NOW</button>
          <button onClick={() => scrollToSection('Contact')}>CUSTOMIZE CAKE</button>
            </div>



     </div>
    </>
  )
}

export default Home