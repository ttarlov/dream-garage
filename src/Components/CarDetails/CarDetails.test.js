import React from 'react';
import { render,fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import CarDetails from './CarDetails.jsx'

describe("CarDetails Component", () => {


    it('should render without errors ', () => {
        
        const { getByText, debug, getByPlaceholderText } = render(
            <MemoryRouter>
                <CarDetails 
                key= {"2345"}
                year = {"2020"}
                make ={"Mazda"}
                model = {"Miata"}
                trim = {"Base"}
                series = {"Roadster"}
                displacement = {"1.6L"}
                hp = {"100"}
                carId = {"12345"}/>
            </MemoryRouter>
        )
            const makeEl = getByText("Make: Mazda")
            expect(makeEl).toBeInTheDocument()
            
            const modelEl = getByText("Model: Miata")
            expect(modelEl).toBeInTheDocument()
            
            const yearEl = getByText("Model: Miata")
            expect(yearEl).toBeInTheDocument()
            
            const trimEl = getByText("Trim: Base")
            expect(trimEl).toBeInTheDocument()
            
            const seriesEl = getByText("Type: Roadster")
            expect(seriesEl).toBeInTheDocument()


 
    });



})