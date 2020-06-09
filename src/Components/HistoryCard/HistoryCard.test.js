import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import HistoryCard from './HistoryCard.jsx'

describe("HistoryCard Component", () => {

    

    it('Should see oilchange history if there is any', () => {
        
        const { getByText, debug } = render(
            <MemoryRouter>
            <HistoryCard oilChangeHistory = {[{Date: "06-24-2020", Mileage: 123.567, id: 2020}]} />
            </MemoryRouter>
            )

        const recordEl = getByText("Date: 06-24-2020 | Mileage: 123.567")
        expect(recordEl).toBeInTheDocument()
        
        
        
    });


    it('Should give a user notification if there is no oilchange history available', () => {
        
        const { getByText, debug } = render(
            <MemoryRouter>
            <HistoryCard oilChangeHistory = {[]} />
            </MemoryRouter>
            )
            
            const noRecordEl = getByText("No Oil Change History Found")
            expect(noRecordEl).toBeInTheDocument()

            
        });
        
        


})