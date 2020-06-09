import React from 'react';
import './LandinPage.css';
import CarDetails from '../CarDetails/CarDetails.jsx'
import "./LandinPage.css"
import PropTypes from 'prop-types';

const LandinPage = (props) => {
    
   
    let carsInGarage; 
    carsInGarage = props.garage.map(car => {
        
       
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
            />


        )
    })


    return (
        <section className="car-cards-container">
            {carsInGarage}
        </section>
    )


}


LandinPage.propTypes = {
    garage: PropTypes.array
}




export default LandinPage
