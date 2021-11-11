/*
 *  Author: Christopher Muller
 */
import { React } from "react";
import {
    render,
    fireEvent,
    waitForElementToBeRemoved
} from "@testing-library/react";
import "@testing-library/jest-dom";
import AddMap from "./AddMap";

describe("AddMap", () => {
    it("should handle a response from the server", async () => {
        const { getByText, getByRole} = render(<AddMap />);
        //submit form
        fireEvent.input(getByRole("textbox", { name: /title/i }), {
            target: { value: "Test map" }
        });
        fireEvent.input(getByRole("textbox", { name: /image/i }), {
            target: {
                value: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Mr._Smiley_Face.svg/1200px-Mr._Smiley_Face.svg.png"
            }
        });
        fireEvent.input(getByRole("textbox", { name: /address/i }), {
            target: { value: "IDK what this field is for" }
        });
        fireEvent.input(getByRole("textbox", { name: /description/i }), {
            target: { value: "this is a test map" }
        });
        fireEvent.submit(getByRole("button", { name: /map/i }));
        await waitForElementToBeRemoved(getByText("Add a Map"));
        expect(getByText("Submitted")).toBeInTheDocument();
    });
    it("Should handle an error", async () => {
        const { getByText, getByRole} = render(<AddMap />);
        //submit form
        fireEvent.input(getByRole("textbox", { name: /title/i }), {
            target: { value: "Test map" }
        });
        fireEvent.input(getByRole("textbox", { name: /image/i }), {
            target: {
                value: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Mr._Smiley_Face.svg/1200px-Mr._Smiley_Face.svg.png"
            }
        });
        fireEvent.input(getByRole("textbox", { name: /address/i }), {
            target: { value: "IDK what this field is for" }
        });
        fireEvent.input(getByRole("textbox", { name: /description/i }), {
            target: { value: "this is a test map" }
        });
        fireEvent.submit(getByRole("button", { name: /map/i }));
        await waitForElementToBeRemoved(getByText("Add a Map"));
        expect(getByText("Submitted")).toBeInTheDocument();
    });
});
