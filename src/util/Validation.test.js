/*
 *  Author: Christopher Muller
 */
import { IsText, IsURL } from './Validation';

describe("IsText", () => {
    it("should validate text", () => {
        expect(IsText("some text")).toBe(true);
        expect(IsText("")).toBe(false);
    });
});

describe("IsURL", () => {
    it("should validate a url", () => {
        expect(IsURL("just some normal text")).toBe(false);
        expect(IsURL("")).toBe(false);
        expect(IsURL("www.google.com")).toBe(true);
    });
});
