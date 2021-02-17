const { expect } = require("chai");
const { describe } = require("mocha");

import { bundle } from "../../../../Part_One/string_concatenation";

describe("welcomeStatement testing", () => {
  it("welcomeStatement is equal to `Welcome to the jungle!`", () => {
    expect(bundle.welcomeStatement).to.equal("Welcome to the jungle!");
  });
  it("welcomeStatement contains three spaces", () => {
    expect(bundle.welcomeStatement.split(" ").length).to.equal(3);
  });
});
