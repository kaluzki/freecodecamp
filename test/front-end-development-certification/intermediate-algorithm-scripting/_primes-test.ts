import { assert } from "chai";
import Primes from "../../../src/front-end-development-certification/intermediate-algorithm-scripting/_primes"

/**
 * @see Primes.to
 */
describe("Primes.to(to: number): number[]", () => {
    it("(1) should return []", () => {
        assert.deepEqual(Primes.to(1), []);
    });
    it("(2) should return [2]", () => {
        assert.deepEqual(Primes.to(2), [2]);
    });
    it("(20) should return [2, 3, 5, 7, 11, 13, 17, 19]", () => {
        assert.deepEqual(Primes.to(20), [2, 3, 5, 7, 11, 13, 17, 19]);
    });
    it("(1000) should return an array with 168 elements, last prime should be 997", () => {
        assert.equal(Primes.to(1000).length, 168);
        assert.equal(Primes.to(1000)[167], 997);
    });
});

/**
 * @see Primes.range
 */
describe("Primes.range(from:number, to: number): number[]", () => {
    it("(1, 1) should return []", () => {
        assert.deepEqual(Primes.range(1, 1), []);
    });
    it("(5, 11) should return [5, 7, 11]", () => {
        assert.deepEqual(Primes.range(5, 11), [5, 7, 11]);
    });
    it("(4, 11) should return [5, 7, 11]", () => {
        assert.deepEqual(Primes.range(4, 11), [5, 7, 11]);
    });
    it("(5, 12) should return [5, 7, 11]", () => {
        assert.deepEqual(Primes.range(5, 12), [5, 7, 11]);
    });
    it("(11, 5) should return []", () => {
        assert.deepEqual(Primes.range(11, 5), []);
    });
    it("(99900, 100100) should return 14 primes", () => {
        assert.deepEqual(
            Primes.range(99900, 100100),
            [99901, 99907, 99923, 99929, 99961, 99971, 99989, 99991, 100003, 100019, 100043, 100049, 100057, 100069]
        );
    });
});

/**
 * @see Primes.is
 */
describe("Primes.is(prime:number): boolean", () => {
    for (let testCase of [
        {prime: -1, expected: false},
        {prime: 0, expected: false},
        {prime: 1, expected: false},
        {prime: 2, expected: true},
        {prime: 3, expected: true},
        {prime: 100067, expected: false},
        {prime: 100069, expected: true}
    ]) {
        it(`(${testCase.prime}) should return ${ testCase.expected }`, () => {
            assert.equal(Primes.is(testCase.prime), testCase.expected);
        });
    }
});