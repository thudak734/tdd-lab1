"use strict";

const { translate, translateV1 } = require("../src/translate.js");

describe("translate function", () => {
  test("word that starts with a vowel", () => {
    const result = translate("apple");
    expect(result).toBe("appleway");
  });
  test("word that starts with a vowel", () => {
    const result = translate("soup");
    expect(result).toBe("oupsay");
  });
});

describe("translate function", () => {
  test("word that starts with a vowel", () => {
    const result = translateV1("apple");
    expect(result).toBe("appleway");
  });
  test("word that starts with a vowel", () => {
    const result = translateV1("soup");
    expect(result).toBe("oupsay");
  });
});
