import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Login from '../Login/Login.jsx'
import LandingPage from '../LandingPage/LandingPage.jsx'
import Error from '../Error/Error.jsx'

class App extends Component {
  constructor(){
    super();
    this.state = {
      garage:[],
      potentialCar: {},
      isLoggedin: false
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
      initialCar.id = Date.now()
      this.setState({potentialCar:initialCar})
  
      console.log("car added");
  }

  addCarToGarage = () => {
    this.setState({garage:[...this.state.garage, this.state.potentialCar], potentialCar: "", isLoggedin: true})
  
  }



  render() {

    return (
      <main className='main-section'> 
      <Switch>
        
        <Route exact path = '/' render = { () => <Login 
          buildCar = {this.buildCar} 
          potentialCar = {this.state.potentialCar}
          addCarToGarage = {this.addCarToGarage}
          />} />

           <Route path='/error' render ={ () => <Error /> }
          />

          { this.state.isLoggedin === true ? 
          <Route exact path = '/garage' render = {() => <LandingPage garage ={this.state.garage} />} 
        
          /> : <Redirect to = "/error" />
          }

        </Switch>
    </main>
    )
  }


} 


export default App;
