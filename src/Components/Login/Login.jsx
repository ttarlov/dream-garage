import React, { Component } from 'react';
// import { Switch, Route, Redirect, L} from 'react-router-dom';
import './Login.css';
import { decodeVin } from '../../apiCalls'
import { Link } from 'react-router-dom';
import stockImage from './audi-stock-image.jpg'
import Form from "../Form/Form.jsx"


const Login = (props) => {


        
        return (
            <section className='login-container'>
                {Object.keys(props.potentialCar).length === 0 ? <Form buildCar ={props.buildCar} /> : ""}
             
        
        {Object.keys(props.potentialCar).length > 0  ? 
        
        <div className="potential-car-card">
                <img className="stock-car-image" src={stockImage} alt="stock car"></img>
            <div className="year-make-model-popup">
                <p>{props.potentialCar["Model Year"]}</p>
                <p>{props.potentialCar["Make"]}</p>
                <p>{props.potentialCar["Model"]}</p>
            </div>
            <div className="decision-btns-container">
           
                <Link to = '/garage'>
                <button className="decision-btn" onClick = {() => props.addCarToGarage()}>Add To Garage</button>
                </Link>
                
                <button className="decision-btn" onClick= {() => props.resetPotentialCar()}>Start Over</button>
           
           
            </div>
        </div> : null }
            </section>

        )
    }



export default Login