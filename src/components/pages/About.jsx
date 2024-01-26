import React from 'react'
import './About.css'
import aboutImg from './mediapage/shift.jpg'

const About = () => {
  return (
    <>
    <div className="Service" id='Services'>
      <h1>Our Services</h1>
      <div className="serCon">
        
        <div className="serv">  
        <h2>Food and Beverage</h2>
        <p>We offer a diverse range of food and beverage options. It include a variety of cakes, pastries, desserts and savory foods along with a selection of beverages such as coffee, tea, and other drinks.</p>
        </div>

        <div className="serv">  
        <h2>Customized Pastries</h2>
        <p>Customers have the opportunity to personalize their orders, allowing for unique cakes and pastries tailored to their preferences. This could involve choosing flavors, designs, and other customizations for special occasions.</p>
        </div>

        <div className="serv">  
        <h2>Delivery </h2>
        <p>B.C Cakes provides delivery services, making it convenient for customers to enjoy their delicious pastries and cakes at their preferred location. Whether it's for a celebration, event, or simply for personal enjoyment.</p>
        </div>

      </div>
    </div>
    </>
  )
}

export default About