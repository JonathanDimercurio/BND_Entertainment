/*
 *  Author: Chris Muller
 */

import React from 'react'
import { cleanup, render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import MapAddForum from "./MapAddForum"

test("MapAddForum Unit", () => {
        const {container, getByText} = render(<MapAddForum />)

        expect(getByText("Map Name")).toBeInTheDocument()
        expect(getByText("Map Image")).toBeInTheDocument()
        expect(getByText("Description")).toBeInTheDocument()
})
