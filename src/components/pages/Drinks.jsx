import React from 'react';
import './Menu.css';

const Drinks = () => {
  
    const gotoStartedClick2 = () => {
        window.open('https://www.facebook.com/sweetKayks', '_blank');
      };


  return (
    <>
      <div className="Beverage">
        <h1 className='ft'>Drinks</h1>
        <div className="itemCon">

          {[
            { image: "./beverage/halo.jpg", name: "Halo-Halo", price: "₱80" },
            { image: "./beverage/maiscon.jpg", name: "Mais con Yelo", price: "₱70" },
            { image: "./beverage/milktea.jpg", name: "Milktea", price: "₱70" },
            { image: "./beverage/mochafrap.jpg", name: "Frappe", price: "₱80" },
            { image: "./beverage/mangasmo.jpg", name: "Mango Smoothie", price: "₱70" },
            { image: "./beverage/banasmo.jpg", name: "Banana Smoothie", price: "₱70" },
            { image: "./beverage/icedcof.jpg", name: "Iced Coffee", price: "₱50" },
            { image: "./beverage/barako coffee.jpg", name: "Hot Coffee", price: "₱40" },
            { image: "./beverage/hotchoco.jpg", name: "Hot Choco", price: "₱50" },
            { image: "./beverage/Jacoke.jpg", name: "Jacoke", price: "₱80" },
            
          ].map((item, index) => (
            <div
             className="itemMenu"
              key={index}>
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
              <p>{item.price}</p>
            </div>
          ))}
         
        </div>
        <button className='oBut' onClick={gotoStartedClick2}>ORDER NOW</button>
      </div>
    </>
  );
};

export default Drinks;
