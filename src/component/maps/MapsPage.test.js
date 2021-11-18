/*
 *  Author: Christopher Muller
 */
import { React } from "react";
import {
    render,
    fireEvent,
    waitForElementToBeRemoved,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import MapsPage from "./MapsPage";
import { server, rest } from '../../mocks/server.js';

const MAP = 'https://bnd-entertainment-default-rtdb.firebaseio.com/maps.json';

describe("MapPage", () => {
    it("Should query the server", async () => {
        const { getByText } = render(<MapsPage />);
        await waitForElementToBeRemoved(() =>
            getByText(/loading/i)
        );
        expect(getByText("Mocked Map 1")).toBeInTheDocument();
    });
    it("Should handle errors", async () => {
        //mock error response
        const testErrorMessage = 'THIS IS A TEST FAILURE';
        server.use(
            rest.get(MAP, async (req, res, ctx) => {
                return res(ctx.status(500), ctx.json({
                    message: testErrorMessage
                }));
            }),
        );
        //test
        const { getByText } = render(<MapsPage />);
        await waitForElementToBeRemoved(() =>
            getByText(/loading/i)
        );
        expect(getByText(/error/i)).toBeInTheDocument()
    });
});
