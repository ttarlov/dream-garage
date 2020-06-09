import React from 'react';
import { render,fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import Form from './Form.jsx'


afterEach(cleanup);

 
describe("Form Component", () => {

    const mockBuildCar = jest.fn()

it('should render wihout errors', () => {
    


    const { getByText, getByPlaceholderText, debug } = render(
        <MemoryRouter>
        <Form  buildCar ={mockBuildCar}
        />
        </MemoryRouter>
    )           

        const yearInputEl = getByPlaceholderText('XXXX') 
        expect(yearInputEl).toBeInTheDocument()
        
        const vinInputEl = getByPlaceholderText('vin number') 
        expect(vinInputEl).toBeInTheDocument()

        const submitBtnEl = getByText('Submit')
        expect(submitBtnEl).toBeInTheDocument()

})


it('Should allow user to log into "garage given correct date inputs" ', () => {
    
    const { getByText, getByPlaceholderText, debug} = render(
        <MemoryRouter>
        <Form  buildCar ={mockBuildCar}
        />
        </MemoryRouter>
    )           
        
        
        const submitBtnEl = getByText('Submit')
        expect(submitBtnEl).toBeInTheDocument()

        fireEvent.change(getByPlaceholderText('XXXX'), {target: {value: '2000'}});
        fireEvent.change(getByPlaceholderText('vin number'), {target: {value: 'xxxxxxxxxxxxxx'}});
        fireEvent.click(getByText('Submit'))
        expect(mockBuildCar).toHaveBeenCalledTimes(1)

});

it('should give an error message if year input is less than 4 characters', () => {
    
    const { getByText, getByPlaceholderText, debug } = render(
        <MemoryRouter>
        <Form  buildCar ={mockBuildCar}
        />
        </MemoryRouter>
    )           
      
        
        const submitBtnEl = getByText('Submit')
        expect(submitBtnEl).toBeInTheDocument()

        fireEvent.change(getByPlaceholderText('XXXX'), {target: {value: '199'}});
        fireEvent.change(getByPlaceholderText('vin number'), {target: {value: 'xxxxxxxxxxxxxx'}});
        fireEvent.click(getByText('Submit'))
        expect(getByText('Please Fill In All Inputs')).toBeInTheDocument()

}); 



}) 