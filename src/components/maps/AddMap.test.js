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
import { server, rest } from '../../mocks/server.js';

const MAP = 'https://bnd-entertainment-default-rtdb.firebaseio.com/maps.json';

describe("AddMap", () => {
    it("should handle a response from the server", async () => {
        const { getByText, getByRole} = render(<AddMap />);
        //submit form
        fireEvent.input(getByRole("textbox", { name: /title/i }), {
            target: { value: "Test map" }
        });
        fireEvent.input(getByRole("textbox", { name: /url/i }), {
            target: {
                value: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Mr._Smiley_Face.svg/1200px-Mr._Smiley_Face.svg.png"
            }
        });
        fireEvent.input(getByRole("textbox", { name: /description/i }), {
            target: { value: "this is a test map" }
        });
        fireEvent.submit(getByRole("button", { name: /map/i }));
        await waitForElementToBeRemoved(() =>
            getByText(/loading/i)
        );
        expect(getByText(/submitted/i)).toBeInTheDocument();
    });
    it("Should handle an error", async () => {
        //override server mock
        const testErrorMessage = 'THIS IS A TEST FAILURE';
        server.use(
            rest.post(MAP, async (req, res, ctx) => {
                return res(ctx.status(500), ctx.json({
                    message: testErrorMessage
                }));
            }),
        );
        //render
        const { getByText, getByRole} = render(<AddMap />);
        //submit form
        fireEvent.input(getByRole("textbox", { name: /title/i }), {
            target: { value: "Test map" }
        });
        fireEvent.input(getByRole("textbox", { name: /url/i }), {
            target: {
                value: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Mr._Smiley_Face.svg/1200px-Mr._Smiley_Face.svg.png"
            }
        });
        fireEvent.input(getByRole("textbox", { name: /description/i }), {
            target: { value: "this is a test map" }
        });
        fireEvent.submit(getByRole("button", { name: /map/i }));
        await waitForElementToBeRemoved(() =>
            getByText(/loading/i)
        );
        expect(await getByText(/error/i)).toBeInTheDocument();
    });
});
