import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Login from '../Login/Login.jsx'
import LandingPage from '../LandingPage/LandingPage.jsx'
import Error from '../Error/Error.jsx'
import NavBar from '../NavBar/NavBar.jsx'
import HistoryCard from '../HistoryCard/HistoryCard.jsx'
import uniqid from 'uniqid'



class App extends Component {
  constructor(){
    super();
    
    this.state = {
      garage:[],
      oilChangeHistory: [],
      potentialCar: {},
      isLoggedin: false,
      displayedHistory: [],
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

      initialCar.id = uniqid()
      this.setState({potentialCar:initialCar})
  
   
  }

  addCarToGarage = () => {
    this.setState({garage:[...this.state.garage, this.state.potentialCar], potentialCar: "", isLoggedin: true})
    
  }


  resetPotentialCar = () => {

    this.setState({potentialCar: {}})

  }


  updateHistory = (newRecord) => {
  
   
    
    this.setState({oilChangeHistory:[...this.state.oilChangeHistory, newRecord]}) 
  
  
  }



  render() {
    let navBar;
    this.state.isLoggedin === true ? navBar = <NavBar numOfCars={this.state.garage.length}/> : navBar = ""


    return (
      <main className='main-section'> 
      <Switch>
        
        <Route exact path = '/main' render = { () => 
         <Login 
          buildCar = {this.buildCar} 
          resetPotentialCar = {this.resetPotentialCar}
          potentialCar = {this.state.potentialCar}
          addCarToGarage = {this.addCarToGarage}
          />} />

           <Route path='/error' render ={ () => <Error /> }
          />

          { this.state.isLoggedin === true ? 
          <Route exact path = '/garage' render = {() => 
            <LandingPage 
            garage ={this.state.garage} 
            />} 
        
          /> : <Redirect to = "/error" />
          }

          <Route path = '/oilchanges/:id'  render= {({match}) => 
          <HistoryCard 
          updateHistory={this.updateHistory}
          oilChangeHistory= {this.state.oilChangeHistory.filter(oilchange => oilchange.carId === match.params.id)}
          match= {match} 
          />} />

        </Switch>
       {navBar}

    </main>
    )
  }


} 


export default App;
