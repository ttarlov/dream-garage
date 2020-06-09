import React from 'react';
import { render,fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import LandingPage from './LandingPage.jsx'

describe("LandingPage Component", () => {


    it('Should render cars in the garage', () => {
        const { getByText, debug } = render( 
            <MemoryRouter>
                <LandingPage garage ={[
                    {
                        id: 1234,
                        "Model Year": "2020",
                        "Model": "355",
                        "Make": "Ferrari",
                        "Trim": "Superlegera",
                        "Series":"wagon",
                        "Displacement (L)": "5.8",
                        "Engine Brake (hp)": "525"
                }]} />
            </MemoryRouter>
            )

            const modelYearEl = getByText("Year: 2020")
            expect(modelYearEl).toBeInTheDocument()
            
            const modelEl = getByText("Model: 355")
            expect(modelEl).toBeInTheDocument()
            
            const trimEl = getByText("Trim: Superlegera")
            expect(trimEl).toBeInTheDocument()
            
            const typeEl = getByText("Type: wagon")
            expect(typeEl).toBeInTheDocument()


            debug()
    });





})