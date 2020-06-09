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

it('As a user after I fill in Year and Vin info (correctly) I should see my garage', async () => {


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

    const addToGarageBtn = await waitFor( () => getByText("Add To garage"))
    expect(addToGarageBtn).toBeInTheDocument()
    
    fireEvent.click(getByText('Add To garage'))
     
    const typeEl = getByText("Type: quattro")
    expect(typeEl).toBeInTheDocument()
     
  debug()
});


it('As a user i should be able to see oilchange history of a chosen car', async () => {
  
  const { getByText, getByPlaceholderText, debug } = renderApp()

    fireEvent.change(getByPlaceholderText('XXXX'), {target: {value: '1999'}});
    fireEvent.change(getByPlaceholderText('vin number'), {target: {value: 'waugb28d9xa015626'}});
    fireEvent.click(getByText('Submit'))

    const addToGarageBtn = await waitFor( () => getByText("Add To garage"))
    expect(addToGarageBtn).toBeInTheDocument()
    
    fireEvent.click(getByText('Add To garage'))

    fireEvent.click(getByText("Oil Change History"))

    const addNewRecordBtn = getByText("Add New Record")
    expect(addNewRecordBtn).toBeInTheDocument()

});


it('As a user I should be able to add new oil change record', async () => {
  
  const { getByText, getByPlaceholderText, debug } = renderApp()

    fireEvent.change(getByPlaceholderText('XXXX'), {target: {value: '1999'}});
    fireEvent.change(getByPlaceholderText('vin number'), {target: {value: 'waugb28d9xa015626'}});
    fireEvent.click(getByText('Submit'))

    const addToGarageBtn = await waitFor( () => getByText("Add To garage"))
    expect(addToGarageBtn).toBeInTheDocument()
    
    fireEvent.click(getByText('Add To garage'))

    fireEvent.click(getByText("Oil Change History"))

    fireEvent.change(getByPlaceholderText('date'), {target: {value: '06-20-2020'}});
    fireEvent.change(getByPlaceholderText('mileage'), {target: {value: '125,666'}});
    fireEvent.click(getByText("Add New Record"))

    const addedHistoryEl = getByText("Date: 06-20-2020 | Mileage 125,666")
    expect(addedHistoryEl).toBeInTheDocument()
  

});



})

