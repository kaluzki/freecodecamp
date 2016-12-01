import { assert } from "chai";
import actual from "../../../src/front-end-development-certification/basic-algorithm-scripting/reverse-a-string"

describe("reverse-a-string", () => {
    it("'hello' should return a string", () => {
        assert.isString(actual("hello"));
    });
    it("'hello' should become 'olleh'", () => {
        assert.equal(actual("hello"), "olleh");
    });
    it("'Howdy' should become 'ydwoH'", () => {
        assert.equal(actual("Howdy"), "ydwoH");
    });
    it("'Greetings from Earth' should return 'htraE morf sgniteerG'", () => {
        assert.equal(actual("Greetings from Earth"), "htraE morf sgniteerG");
    });
});