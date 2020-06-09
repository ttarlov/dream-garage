import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import Login from './Login.jsx'

describe("Login Component", () => {

    const mockBuildCar = jest.fn()
    const mockAddCarToGarage = jest.fn()
    const mockRestPotentialCar = jest.fn()

    it('Should  render without errors', () => {
        


        const { getByText, debug } = render(
            <MemoryRouter>
                <Login 
                    buildCar = {mockBuildCar} 
                    potentialCar = {{"Model Year": 2020, "Make": 'Lada', "Model": 'Niva'}}
                    addCarToGarage = {mockAddCarToGarage}
                    resetPotentialCar = {mockRestPotentialCar}
                />
            </MemoryRouter>
            )

        const yearEl = getByText("2020")
        expect(yearEl).toBeInTheDocument()

        const makeEl = getByText("Lada")
        expect(makeEl).toBeInTheDocument()

        const modelEl = getByText('Niva')
        expect(modelEl).toBeInTheDocument()
    

    });


    it('Should let the user add car to garage', () => {
        
        const { getByText, debug } = render(
            <MemoryRouter>
                <Login 
                    buildCar = {mockBuildCar} 
                    potentialCar = {{"Model Year": 2020, "Make": 'Lada', "Model": 'Niva'}}
                    addCarToGarage = {mockAddCarToGarage}
                    resetPotentialCar = {mockRestPotentialCar}
                />
            </MemoryRouter>
            )

        const yearEl = getByText("2020")
        expect(yearEl).toBeInTheDocument()

        const makeEl = getByText("Lada")
        expect(makeEl).toBeInTheDocument()

        const modelEl = getByText('Niva')
        expect(modelEl).toBeInTheDocument()

        const startOverBtn = getByText("Start Over")
        expect(startOverBtn).toBeInTheDocument()    

        fireEvent.click(getByText("Add To Garage"))
        expect(mockAddCarToGarage).toHaveBeenCalledTimes(1)
        

    });


    it('Should let the user restart the process', () => {
        
        const { getByText, debug } = render(
            <MemoryRouter>
                <Login 
                    buildCar = {mockBuildCar} 
                    potentialCar = {{"Model Year": 2020, "Make": 'Lada', "Model": 'Niva'}}
                    addCarToGarage = {mockAddCarToGarage}
                    resetPotentialCar = {mockRestPotentialCar}
                />
            </MemoryRouter>
            )

        const yearEl = getByText("2020")
        expect(yearEl).toBeInTheDocument()

        const makeEl = getByText("Lada")
        expect(makeEl).toBeInTheDocument()

        const modelEl = getByText('Niva')
        expect(modelEl).toBeInTheDocument()

        const startOverBtn = getByText("Start Over")
        expect(startOverBtn).toBeInTheDocument()    

        fireEvent.click(getByText("Start Over"))
        expect(mockRestPotentialCar).toHaveBeenCalledTimes(1)
        

    });




})