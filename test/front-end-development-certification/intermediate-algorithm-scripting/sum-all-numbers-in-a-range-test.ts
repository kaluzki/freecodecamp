import { assert } from "chai";
import actual from "../../../src/front-end-development-certification/intermediate-algorithm-scripting/sum-all-numbers-in-a-range"

describe("sum-all-numbers-in-a-range", () => {
    it("[1, 4] should return a number", () => {
        assert.isNumber(actual([1, 4]));
    });
    it("[1, 4] should return 10", () => {
        assert.equal(actual([1, 4]), 10);
    });
    it("[4, 1] should return 10", () => {
        assert.equal(actual([4, 1]), 10);
    });
    it("[5, 10] should return 45", () => {
        assert.equal(actual([5, 10]), 45);
    });
    it("[10, 5] should return 45", () => {
        assert.equal(actual([10, 5]), 45);
    });
});