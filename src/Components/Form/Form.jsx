import React, { Component } from 'react'
import { decodeVin } from '../../apiCalls'
import './Form.css'

class Form extends Component {
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
           <section className="form-container">
            <form className="login-form" >
            <div className="input-container">
            <label>Input Vehicle Year</label>
            <input 
                className="login-input"
                type='number'
                minLength ="4"
                maxLength = "4"
                placeholder='XXXX'
                value={this.state.year}
                name='year'
                onChange={this.handleChange}
            />
            </div>
            <div className="input-container">
            <label>Input Full Or Partial Vin</label>
            <input 
                className="login-input"
                type='text'
                placeholder='vin number'
                value={this.state.vin}
                name='vin'
                onChange={this.handleChange}
            />
            </div>
                <button type='button' className="submit-btn" onClick={(e)=> this.loginUser(e)} >Submit</button>
            </form>
            {this.state.error && <div> <p className="error-message">{this.state.error}</p> </div>}
            </section>
        )

    }

}

    export default Form 