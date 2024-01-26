import React from 'react';
import './Menu.css';

const Savory = () => {
  
    const gotoStartedClick2 = () => {
        window.open('https://www.facebook.com/sweetKayks', '_blank');
      };


  return (
    <>
      <div className="Savory">
        <h1 className='ft'>Savory</h1>
        <div className="itemCon">

          {[
            { image: "./savory/spag.jpg", name: "Spaghetti", price: "₱100" },
            { image: "./savory/pestochic.jpg", name: "Pesto", price: "₱120" },
            { image: "./savory/alfredo.jpg", name: "Alfredo", price: "₱100" },
            { image: "./savory/shawarmarice.jpg", name: "Shawarma Rice", price: "₱80" },
            { image: "./savory/porkawali.jpg", name: "Pork Kawali", price: "₱80" },
            { image: "./savory/budgetburg.jpg", name: "Budget Burger", price: "₱69" },
            { image: "./savory/beefburg.jpg", name: "Beef Burger", price: "₱100" },
            { image: "./savory/chicburgfri.jpg", name: "Chicken Burger", price: "₱100" },
            { image: "./savory/chicnfries.jpg", name: "Chickn'Fries", price: "₱110" },
            { image: "./savory/freshlump.jpg", name: "Fresh Lumpia", price: "₱50" },
            
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

export default Savory;
