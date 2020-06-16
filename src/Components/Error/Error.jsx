import React from 'react';
import { Link } from 'react-router-dom';
import accident from './error-accident.png'
import './Error.css'

const Error = () => {

    return (
        <div className="error-page-container">
            <img  className="broken-car-img" src={accident} alt="broken car"></img>
            <h1>Accidents Happen</h1>

            <Link to='/main' >
                <button className='back-to-login-btn'>Go Back to Login Page</button>
            </Link >

        </div>
    )

} 


export default Error