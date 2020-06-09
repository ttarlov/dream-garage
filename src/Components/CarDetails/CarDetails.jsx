import React from 'react';
import PropTypes from 'prop-types';
import "./CarDetails.css"
import stockCar from './stock-car-img.jpg'
import { Link } from 'react-router-dom'

const CarDetails = (props) => {
    // console.log("looking for id here",props);
    

return (
    <section className='car-details-card'>
        <div className="stock-car-img-container">
        <img className="stock-car-img" src={stockCar} alt="stock car"></img>
        </div>
        <div className="car-info-container">
        <div className="year-make-container">
            <p>Year: {props.year}</p>
            <p>Make: {props.make}</p>
        </div>
        <div className="specs-history-container">
            <p>Specs:</p>
            <ul>
                <li>Trim: {props.trim === null ? "N/A" : props.trim}</li>
                <li>Type: {props.series === null ? "N/A" : props.trim}</li>
                <li>Engine Size: {props.displacement === null ? "N/A" : props.displacement}</li>
                <li>HP: {props.hp === null ? "N/A" : props.hp}</li>
            </ul>
        </div>
        </div>
            <div className="history-btn-container">
            <Link to={`/oilchanges/${props.carId}`}>
                {/* <button id={props.id} className="history-btn" onClick={(e) => props.getOilChangeHistory(e.target.id)}> Oil Change History</button> */}
                <button id={props.carId} className="history-btn" > Oil Change History</button>
            </Link>
            <Link to='/milage'>
                <button id={props.carId} className="history-btn"> Gas Mileage History</button>
            </Link>
            <Link to='repairhistory'>
                <button id={props.carId} className="history-btn"> Repair History</button>
            </Link>
            </div>
    </section>
)

}

export default CarDetails