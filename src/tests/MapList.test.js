///*
// *  Author: Christopher Muller
// */
//import { React } from "react";
//import { screen, render, fireEvent, waitFor } from "@testing-library/react";
//import "@testing-library/jest-dom";
//import MapList from "../component/map/MapList";
//
//describe("MapItem", () => {
//    it("should render all maps", () => {
//        const mockData = [{
//            id: "t1",
//            title: "Test Map 1"
//        },
//        {
//            id: "t2",
//            title: "Test Map 2"
//        }];
//        render(<MapItemList maps={mockData} />);
//        expect(screen.getByText("Test Map 1")).toBeInTheDocument();
//        expect(screen.getByText("Test Map 2")).toBeInTheDocument();
//    });
//});
