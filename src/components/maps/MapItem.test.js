/*
 *  Author: Christopher Muller
 */
import { React } from "react";
import { screen, render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import MapItem from "./MapItem";

describe("MapItem", () => {
    it("should render the basic fields", () => {
        render(<MapItem
            image="blah"
            title="Test Map"
            address="Test Map Address"
            description="this is a Test Map"
        />);
        //image
        expect(
            screen.getByRole("img", { name: /Test/i })
        ).toBeInTheDocument();
        //text
        expect(screen.getByText("Test Map")).toBeInTheDocument();
        expect(screen.getByText("this is a Test Map")).toBeInTheDocument();
        // buttons
	/*
        expect(
            screen.getByRole("button", { name: /favorites/i })
        ).toBeInTheDocument();*/

        expect(
            screen.getByRole("button", { name: /map/i })
        ).toBeInTheDocument();
    });
    it("Should handle clicks", async () => {
        render(<MapItem
            key={0}
            id={0}
            image="blah"
            title="Test Map"
            address="Test Map Address"
            description="this is a Test Map"
        />);
        //fireEvent.submit(screen.getByRole("button", { name: /favorites/i }));
        fireEvent.submit(screen.getByRole("button", { name: /map/i }));
    });
});
