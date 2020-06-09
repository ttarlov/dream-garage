import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

import NavBar from './NavBar.jsx'


describe('NavBar Component', () => {
   
    it('should render without Errors', () => {

            const { getByText, debug } = render(
                <BrowserRouter>
                <NavBar  numOfCars = {[1]}
                />
                </BrowserRouter>
        )

        const garageIconEl = getByText('1')
        expect(garageIconEl).toBeInTheDocument(); 

        const totalSpendEl = getByText('$2000')
        expect(totalSpendEl).toBeInTheDocument(); 

        const avgMpg = getByText('25mpg')
        expect(avgMpg).toBeInTheDocument(); 


    });
});