import React from 'react';
import { Link } from 'react-router-dom';
import accident from './error-accident.png'
import './Error.css'

const Error = () => {

    return (
        <div className="error-page-container">
            <img  className="broken-car-img" src={accident} alt="broken car"></img>
            <p>Accidents Happen</p>

            <Link to='/' >
                <button className='back-to-login-btn'>Go Back to Login Page</button>
            </Link >

        </div>
    )

} 


export default Error