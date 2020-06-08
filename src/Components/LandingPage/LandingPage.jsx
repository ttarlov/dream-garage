import React, { Component } from 'react';
import './LandinPage.css';
import CarDetails from '../CarDetails/CarDetails.jsx'
import "./LandinPage.css"

const LandinPage = (props) => {
    // console.log(props);

    let carsInGarage; 
    carsInGarage = props.garage.map(car => {
        console.log(car);
        
       
        return (
            <CarDetails 
                key= {car.id}
                year = {car["Model Year"]}
                make ={car["Make"]}
                model = {car["Model"]}
                trim = {car["Trim"]}
                series = {car["Series"]}
                displacement = {car["Displacement (L)"]}
                hp = {car["Engine Brake (hp)"]}
                carId = {car.id}
                // getOilChangeHistory = {props.getOilChangeHistory}
            />


        )
    })


    return (
        <section className="car-cards-container">
            {carsInGarage}
        </section>
    )


}

export default LandinPage
