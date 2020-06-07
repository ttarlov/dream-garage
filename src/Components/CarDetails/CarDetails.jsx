import React from 'react';
import PropTypes from 'prop-types';
import "./CarDetails.css"
import stockCar from './stock-car-img.jpg'

const CarDetails = (props) => {


return (
    <section className='car-details-card'>
        <img className="stock-car-img" src={stockCar} alt="stock car"></img>
        <div className="car-info-container">
        <div className="year-make-container">
            <p>Year: {props.year}</p>
            <p>Make: {props.make}</p>
        </div>
        <div className="specs-history-container">
            <p>Specs:</p>
            <ul>
                <li>Trim: {props.trim}</li>
                <li>Type: {props.series}</li>
                <li>Engine Size: {props.displacement}</li>
                <li>HP: {props.hp}</li>
            </ul>
        </div>
        </div>
    </section>
)

}

export default CarDetails