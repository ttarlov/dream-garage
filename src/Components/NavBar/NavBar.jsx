import React from 'react'
import { Link } from 'react-router-dom';
import garage from './garage.svg'
import moneyIcon  from './add-expense.svg'
import mpg from './fuel-economy.svg'
import './NavBar.css'
import PropTypes from 'prop-types';

const NavBar = (props) => {

   

    return (
        <section className="nav-bar">
 <Link to="/repairhistory">
 <div className="icon-container">
    <img className="nav-icon" src={moneyIcon} alt="money icon"></img>
    <p>$2000</p>
</div>
</Link>

<Link to="/garage"> 
  <div className="icon-container">
    <img className="nav-icon" src={garage} alt="garage icon"></img>
    <p>{props.numOfCars}</p>
    </div>
 </Link> 


<Link to="/mileage">
    <div className="icon-container">
        <img className="nav-icon" src={mpg} alt="mpg icon"></img>
        <p>25mpg</p>
    </div>
</Link> 


        </section>
    )


}

NavBar.propTypes = {
    numberOfCars: PropTypes.number
}


export default NavBar