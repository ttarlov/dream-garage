import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Login from '../Login/Login.jsx'

class App extends Component {
  constructor(){
    super();
    this.state = {
      garage:[],
      potentialCar: {}
    }
  }


  buildCar = async (vinDecodeResponse) => {
   
   
    const responseData = await vinDecodeResponse

    
    const initialCar = responseData.reduce((carData, item) => {
    
     
      if(item.Variable === carData[item.Variable]) {
        carData[item.Variable] = item.Value
      }
    
     
      return carData
    },{
      "Model Year": "Model Year", 
      "Make": "Make", 
      "Model": "Model", 
      "Trim": "Trim",
     "Series": "Series",
      "Displacement (L)": "Displacement (L)",
      "Engine Brake (hp)": "Engine Brake (hp)",
      })

      initialCar.oilChangeHistory = []
      initialCar.repairHistory = []
      initialCar.mpgHistory = []
      this.setState({potentialCar:initialCar})
  
      console.log("car added");
  }

  addCarToGarage = () => {
    this.setState({garage:[...this.state.garage, this.state.potentialCar], potentialCar: ""})

  }



  render() {

    return (
      <main className='main-section'> 
      <h1>Hello World</h1>
      <Login 
        buildCar = {this.buildCar} 
        potentialCar = {this.state.potentialCar}
        addCarToGarage = {this.addCarToGarage}
        />
    </main>
    )
  }


} 


export default App;
