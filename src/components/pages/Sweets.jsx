import React from 'react';
import './Menu.css';

const Sweets = () => {
  
    const gotoStartedClick2 = () => {
        window.open('https://www.facebook.com/sweetKayks', '_blank');
      };


  return (
    <>
      <div className="Sweets">
        <h1 className='ft'>Pastries</h1>
        <div className="itemCon">

          {[
            { image: "./sweets/blueberry.jpg", name: "Blueberry CC", price: "₱850" },
            { image: "./sweets/burntcc.jpg", name: "Burnt CC", price: "₱850" },
            { image: "./sweets/triplechococ.jpg", name: "Trichoco Cake", price: "₱450" },
            { image: "./sweets/banabrd.jpg", name: "Banana Bread", price: "₱130" },
            { image: "./sweets/lemonc.jpg", name: "Lemon Cake", price: "₱120" },
            { image: "./sweets/bentoc.jpg", name: "Bento Cake", price: "₱150" },
            { image: "./sweets/cinaroll.jpg", name: "Cinaroll", price: "₱80" },
            { image: "./sweets/ensay.jpg", name: "Ensaymada", price: "₱40" },
            { image: "./sweets/crinkles.jpg", name: "Crinkles", price: "₱10" },
            { image: "./sweets/oatmealfudgebar.jpg", name: "Oatmeal Bar", price: "₱15" },
            
            
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

export default Sweets;
