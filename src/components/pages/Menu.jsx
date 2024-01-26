import React from 'react'
import './Memenu.css'
import {Link} from 'react-router-dom'

const Menu = () => {
  return (
    <>
    <div className="Menu" id='Menu'>
        <h1> Menu </h1>
            <div className="foodTypes">
                <div className="typeOfFood"> <img src='./SAVORYL.png'/>  <Link to='/savory'> SAVORY </Link>  </div>
                <div className="typeOfFood"> <img src='./SWEETSL.png'/>  <Link to='/sweets'> PASTRY </Link>  </div>
                <div className="typeOfFood"> <img src='./DRINKSL.png'/>  <Link to='/drinks'> DRINKS</Link>  </div>
                
        </div>
    </div>
     </>
  )
}

export default Menu