import React from 'react';
import { Link } from 'react-router-dom';


const Error = () => {

    return (
        <div>
            <p>Page not found</p>

            <Link to='/' >
                <button className='back-to-login-btn'>Go Back to Login Page</button>
            </Link >

        </div>
    )

} 


export default Error