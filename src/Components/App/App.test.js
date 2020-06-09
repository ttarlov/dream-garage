import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import App from './App';
import { mockApiData } from "../../mockApiData"
import { MemoryRouter } from 'react-router-dom'
import { decodeVin  } from '../../apiCalls'


jest.mock('../../apiCalls')

const renderApp = () => {
  return render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
    )

}

const mockData = mockApiData

// console.log(mockData);


describe("App Component", () => {

  decodeVin.mockResolvedValue(mockData)

  it('should render without crashing', () => {
    const { getByText, debug } = renderApp()



  });


it('Should have a login page', () => {
  
  const { getByText, debug, getByPlaceholderText } = renderApp()

  const yearInputEl = getByPlaceholderText('XXXX') 
  expect(yearInputEl).toBeInTheDocument()
  
  const vinInputEl = getByPlaceholderText('vin number') 
  expect(vinInputEl).toBeInTheDocument()

  const submitBtnEl = getByText('Submit')
  expect(submitBtnEl).toBeInTheDocument()
 

});

it('As a user after I fill in Year and Vin info (correctly) I should see a potential car', async () => {


  const { getByText, getByPlaceholderText } = renderApp()

    fireEvent.change(getByPlaceholderText('XXXX'), {target: {value: '1999'}});
    fireEvent.change(getByPlaceholderText('vin number'), {target: {value: 'waugb28d9xa015626'}});
    fireEvent.click(getByText('Submit'))

    const carData = await waitFor( () => getByText("AUDI"))
 
    expect(carData).toBeInTheDocument()


});


it('As a user I should see the car I choose to be added to the garage when I click on the Add To garage BTN ', async () => {

  const { getByText, getByPlaceholderText, debug } = renderApp()

    fireEvent.change(getByPlaceholderText('XXXX'), {target: {value: '1999'}});
    fireEvent.change(getByPlaceholderText('vin number'), {target: {value: 'waugb28d9xa015626'}});
    fireEvent.click(getByText('Submit'))

    const addToGarageBtn = await waitFor( () => getByText("Add To Garage"))
    expect(addToGarageBtn).toBeInTheDocument()
    
    fireEvent.click(getByText('Add To Garage'))
     
    const typeEl = getByText("Trim: quattro")
    expect(typeEl).toBeInTheDocument()
      
});


it('As a user I should be able to reset the process and get back to login page', async () => {
  
  const { getByText, getByPlaceholderText, debug } = renderApp()

    fireEvent.change(getByPlaceholderText('XXXX'), {target: {value: '1999'}});
    fireEvent.change(getByPlaceholderText('vin number'), {target: {value: 'waugb28d9xa015626'}});
    fireEvent.click(getByText('Submit'))

    const restBtn = await waitFor( () => getByText("Start Over"))
    expect(restBtn).toBeInTheDocument()
    
    fireEvent.click(getByText('Start Over'))
     
    const yearInputEl = getByText("Input Vehicle Year")
    expect(yearInputEl).toBeInTheDocument()

    const vinInputEl = getByText("Input Full Or Partial Vin")
    expect(vinInputEl).toBeInTheDocument()
 
});


it('As a user I should be able to see oilchange history of a chosen car', async () => {
  
  const { getByText, getByPlaceholderText, debug } = renderApp()

    fireEvent.change(getByPlaceholderText('XXXX'), {target: {value: '1999'}});
    fireEvent.change(getByPlaceholderText('vin number'), {target: {value: 'waugb28d9xa015626'}});
    fireEvent.click(getByText('Submit'))

    const addToGarageBtn = await waitFor( () => getByText("Add To Garage"))
    expect(addToGarageBtn).toBeInTheDocument()
    
    fireEvent.click(getByText('Add To Garage'))

    fireEvent.click(getByText("Oil Change History"))

    const addNewRecordBtn = getByText("Add New Record")
    expect(addNewRecordBtn).toBeInTheDocument()

});


it('As a user I should be able to add new oil change record', async () => {
  
  const { getByText, getByPlaceholderText, debug } = renderApp()

    fireEvent.change(getByPlaceholderText('XXXX'), {target: {value: '1999'}});
    fireEvent.change(getByPlaceholderText('vin number'), {target: {value: 'waugb28d9xa015626'}});
    fireEvent.click(getByText('Submit'))

    const addToGarageBtn = await waitFor( () => getByText("Add To Garage"))
    expect(addToGarageBtn).toBeInTheDocument()
    
    fireEvent.click(getByText('Add To Garage'))

    fireEvent.click(getByText("Oil Change History"))

    fireEvent.change(getByPlaceholderText('date'), {target: {value: '2020-06-10'}});
    fireEvent.change(getByPlaceholderText('mileage'), {target: {value: '125,666'}});
    fireEvent.click(getByText("Add New Record"))

    const addedHistoryEl = getByText("Date: 2020-06-10 | Mileage: 125,666")
    expect(addedHistoryEl).toBeInTheDocument()
  

});



})

