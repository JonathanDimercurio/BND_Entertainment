/*
 *  Author: Christopher Muller
 */
import { React } from "react";
import { screen, render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import NewMapForm from "./NewMapForm";

describe("NewMapForm", () => {
    it("should render the basic fields", () => {
        render(<NewMapForm />);
        expect(screen.getByText("Map Title")).toBeInTheDocument();
        expect(
            screen.getByRole("textbox", { name: /title/i })
        ).toBeInTheDocument();
        expect(screen.getByText("Address")).toBeInTheDocument();
        expect(
            screen.getByRole("textbox", { name: /address/i })
        ).toBeInTheDocument();
        expect(screen.getByText("Map Image")).toBeInTheDocument();
        expect(
            screen.getByRole("textbox", { name: /image/i })
        ).toBeInTheDocument();
        expect(screen.getByText("Description")).toBeInTheDocument();
        expect(
            screen.getByRole("textbox", { name: /description/i })
        ).toBeInTheDocument();
        expect(
            screen.getByRole('button', { name: /map/i })
        ).toBeInTheDocument();
    });
    /*
    it ("should validate form fields", async () => {
        const mockSave = jest.fn();
        render(<NewMapForm onAddMap={mockSave}/>);
        fireEvent.input(screen.getByRole("textbox", { name: /image/i }), {
            target: { value: 'this is not a url' }
        });

        fireEvent.submit(screen.getByRole("button", { name: /map/i }));

        //expect(await screen.findAllByRole("alert")).toHaveLength(3);
        expect(mockSave).not.toBeCalled();
    });
    */
    it("should submit correct data", async () => {
        const mockSave = jest.fn();
        render(<NewMapForm onAddMap={mockSave}/>);
        fireEvent.input(screen.getByRole("textbox", { name: /title/i }), {
            target: { value: "Test map" }
        });
        fireEvent.input(screen.getByRole("textbox", { name: /image/i }), {
            target: {
                value: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Mr._Smiley_Face.svg/1200px-Mr._Smiley_Face.svg.png"
            }
        });
        fireEvent.input(screen.getByRole("textbox", { name: /address/i }), {
            target: { value: "IDK what this field is for" }
        });
        fireEvent.input(screen.getByRole("textbox", { name: /description/i }), {
            target: { value: "this is a test map" }
        });
        fireEvent.submit(screen.getByRole("button", { name: /map/i }));
        await waitFor(() =>
            expect(mockSave).toHaveBeenCalledWith({
                title: "Test map",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Mr._Smiley_Face.svg/1200px-Mr._Smiley_Face.svg.png",
                address: "IDK what this field is for",
                description: "this is a test map"
            })
        );
    });
});
