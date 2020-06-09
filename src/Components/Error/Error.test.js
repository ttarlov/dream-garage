import React from 'react';
import { render,fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import Error from './Error.jsx'


describe("Error Component", () => {

    it('Should render without errors', () => {
        
        const {getByText, debug} = render(
            <MemoryRouter>
                <Error/>
            </MemoryRouter>
        )

        const headingEl = getByText("Accidents Happen")
        expect(headingEl).toBeInTheDocument()

        const buttonEl = getByText("Go Back to Login Page")
        expect(buttonEl).toBeInTheDocument()

        debug()

    });


})