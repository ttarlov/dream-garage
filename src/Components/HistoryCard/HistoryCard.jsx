import React, { Component } from 'react'
import './HistoryCard.css'
// import uniqueid from 'uniqueid'


class HistoryCard extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            // history: [...this.props.history],
            inputOne: "",
            inputTwo: ""
        }

    }


    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
   
    
    createRecord = () => {
        let newRecord = {Date: this.state.inputOne, Mileage: this.state.inputTwo, carId:this.props.match.params.id}
        // this.setState({history:[...this.state.history, newRecord]})
// console.log(newRecord);
        this.props.updateHistory(newRecord)
        this.setState({inputOne: "", inputTwo: " "})
    }

    


    
    render(props) {
        let displayedHistory;
        
        if(this.props.oilChangeHistory.length === 0) {
           displayedHistory = <p className ="no-history">No Oil Change History Found</p>
        } else {

            displayedHistory = this.props.oilChangeHistory.map((item, index) => {
                
                let keys = Object.keys(item)
                
                return (
                    <li className="history-item" key={index}>{keys[0]}: {item.Date} | {keys[1]} {item.Mileage} </li>
                    )
                })
                
        }
        return(
            <section className="displayed-history-container">
                <ul className="history-item-container">
                    {displayedHistory}
                </ul>
                    <div className="add-new-record-container">
                        <form className ="add-new-record-inputs">
                            <input className="new-record-input" type="text" name="inputOne" value={this.state.inputOne} placeholder="date" onChange={this.handleChange}></input>
                            <input className="new-record-input" type="text" name="inputTwo" value={this.state.inputTwo} placeholder="mileage" onChange={this.handleChange}></input>
                        </form>
                    <button style={{color:this.state.inputOne === "" || this.state.inputTwo=== "" ? "grey" : null} } disabled = {this.state.inputOne === "" || this.state.inputTwo=== ""} className="add-new-record-btn" onClick={() => this.createRecord()}>Add New Record</button>
                    </div>
            </section>
        )
        
    
    
    }

}

export default HistoryCard