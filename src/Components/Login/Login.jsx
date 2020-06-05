import React, { Component } from 'react';
// import { Switch, Route, Redirect, L} from 'react-router-dom';
import './Login.css';
import { decodeVin } from '../../apiCalls'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            year: "",
            vin: "waugb28d9xa015626",
            error: ''
        }
    }



    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    loginUser = (e) => {
        // this.state.year === "" || this.state.vin === "" ? 
        // e.preventDefault() && this.setState({error: "Please Fill In All Inputs"}) 
        // : this.props.buildCar(decodeVin(vin, year))

        if(this.state.year === "" || this.state.vin === "") {
            e.preventDefault();
            this.setState({error: "Please Fill In All Inputs"}) 
        } else {
            e.preventDefault();
            console.log(this.state.vin, this.state.year);
            
            this.props.buildCar(decodeVin(this.state.vin, this.state.year))
            this.setState({vin:"", year:"", error: ""})
        }

    }

    render() {

        
        return (
            <section className='login-container'>
                <h1>Dream Garage</h1>
            <form className="login-form" onSubmit= {(e)=> this.loginUser(e)}>
            <input
                type='number'
                minLength ="4"
                maxLength = "4"
                placeholder='XXXX'
                value={this.state.year}
                name='year'
                onChange={this.handleChange}
            />
            <input
                type='text'
                placeholder='vin number'
                value={this.state.vin}
                name='vin'
                onChange={this.handleChange}
            />
                <button type='submit' className="submit-btn" >Submit</button>
            </form>
            {this.state.error && <div> <p className="error-message">{this.state.error}</p> </div>}
        {Object.keys(this.props.potentialCar).length > 0  ? 
        <div className="potential-car-card">
            <p>{this.props.potentialCar["Model Year"]}</p>
            <p>{this.props.potentialCar["Make"]}</p>
            <p>{this.props.potentialCar["Model"]}</p>
            <div>
                <button onClick = {() => this.props.addCarToGarage()}>Add To garage</button>
                <button onClick= {() => window.location.reload(false)}>Start Over</button>
            </div>
        </div> : null }
            </section>

        )
    }


}


export default Login