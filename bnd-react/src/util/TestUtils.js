import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { render } from '@testing-library/react'

const BrowserRouterContext = ({children}) => {
        return (<div>
                <BrowserRouter>
                        {children}
                </BrowserRouter>
        </div>)
}

const browserRouterRender = (ui, options) =>
        render(ui, {wrapper: BrowserRouterContext, ...options})

export * from '@testing-library/react'

export { browserRouterRender as render }
