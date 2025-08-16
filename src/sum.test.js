import { sum } from "./sum.js";

describe("Test function sum", () => {
    it("return 7", () => {
        expect(sum(3,4)).toEqual(7);
    });
    it("return 5", () => {
        expect(sum(3,2)).toEqual(5);
    });
    it("return 3", () => {
        expect(sum(2,1)).toEqual(3);
    });

    
});