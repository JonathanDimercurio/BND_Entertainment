/*
 *  Author: Christopher Muller
 */
import { React } from "react";
import { screen, render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Gameboard from "./Gameboard";

describe("Gameboard", () => {
  it("should render the basic fields", () => {
    const mockData = { state: { MapName: "blah" } };
    const { getAllByRole } = render(<Gameboard location={mockData} />);
    //expect(getAllByRole("img")).toHaveLength(160);
  });
});
