/*
 *  Author: Chris Muller
 */

import React from 'react'
import { cleanup, render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import AddMap from "./AddMap"

test("MapAdd Integration - Unsuccessful Submission", async () => {
        const {container, getByText} = render(<AddMap />)

        fireEvent.click(screen.getByText('Add Map'))

        let item = await screen.findByText('Add Map')
        expect(item).toBeInTheDocument()
})
