import {  printString } from '../main';

describe("smart contract",() => {
    it("should respond to printString", () => {
        expect<string>(printString("hello")).toStrictEqual("hello");
    })
})
