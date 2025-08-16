import { sum } from "./sum.js";

describe("Test function sum", () => {
    it("return 7", () => {
        expect(sum(3,4)).toEqual(7);
    });
});