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

describe("MapPage", () => {
    it("Should query the server", async () => {
        const { getByText } = render(<MapsPage />);
        await waitForElementToBeRemoved(() =>
            getByText(/loading/i)
        );
        expect(getByText("Mocked Map 1")).toBeInTheDocument();
    });
    it("Should handle errors", async () => {
        const { getByText } = render(<MapsPage />);
        await waitForElementToBeRemoved(() =>
            getByText(/loading/i)
        );
        expect(getByText(/error/i)).toBeInTheDocument()
    });
});
