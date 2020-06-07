import React from 'react'
import { Link } from 'react-router-dom';
import garage from './garage.svg'
import moneyIcon  from './add-expense.svg'
import mpg from './fuel-economy.svg'
import addExpense from './add-expense.svg'
import './NavBar.css'

const NavBar = (props) => {

    return (
        <section className="nav-bar">
 <Link>
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


<Link>
    <div className="icon-container">
        <img className="nav-icon" src={mpg} alt="mpg icon"></img>
        <p>25mpg</p>
    </div>
</Link> 


        </section>
    )


}

export default NavBar