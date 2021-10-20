/*
 *  Author: Chris Muller
 */

import React from 'react'
import { cleanup, render, fireEvent, screen } from './util/TestUtils.js'
import '@testing-library/jest-dom'
import App from "./App"

test("Test test", async () => {
        const {container, getByText} = render(<App />)

        expect(getByText("Home")).toBeInTheDocument()
        expect(getByText("Add a New Map")).toBeInTheDocument()
        expect(getByText("Map Archive")).toBeInTheDocument()

        fireEvent.click(screen.getByText('Add a New Map'))

        const item = await screen.findByText("Add A New Map!")
        expect(item).toBeInTheDocument()
})
