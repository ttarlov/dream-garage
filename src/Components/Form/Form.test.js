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
    
    const { getByText, getByPlaceholderText, debug, getByTestId } = render(
        <MemoryRouter>
        <Form  buildCar ={mockBuildCar}
        />
        </MemoryRouter>
    )           
        const formEl = getByTestId('login-form')
        expect(formEl).toBeInTheDocument()
        
        const submitBtnEl = getByText('Submit')
        expect(submitBtnEl).toBeInTheDocument()

        fireEvent.change(getByPlaceholderText('XXXX'), {target: {value: '2000'}});
        fireEvent.change(getByPlaceholderText('vin number'), {target: {value: 'xxxxxxxxxxxxxx'}});
        fireEvent.click(getByText('Submit'))
        fireEvent.submit(getByTestId('login-form'))
        expect(mockBuildCar).toHaveBeenCalledTimes(1)

});

it('should give an error message if input is missing', () => {
    
    const { getByText, getByPlaceholderText, debug, getByTestId } = render(
        <MemoryRouter>
        <Form  buildCar ={mockBuildCar}
        />
        </MemoryRouter>
    )           
        const formEl = getByTestId('login-form')
        expect(formEl).toBeInTheDocument()
        
        const submitBtnEl = getByText('Submit')
        expect(submitBtnEl).toBeInTheDocument()

        fireEvent.change(getByPlaceholderText('XXXX'), {target: {value: ''}});
        fireEvent.change(getByPlaceholderText('vin number'), {target: {value: 'xxxxxxxxxxxxxx'}});
        fireEvent.click(getByText('Submit'))
        expect(getByText('Please Fill In All Inputs')).toBeInTheDocument()

        debug()
}); 



}) 