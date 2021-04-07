const { expect } = require("chai");
const { describe } = require("mocha");

import { varAssignmentBundle } from "../../../../Part_One/variable_assignment";

describe("Variable Assignment testing", () => {
  it("testing the creation of a var whose type is number and value is 10", () => {
    expect(varAssignmentBundle.num).to.equal(10);
  });
  it("testing the creation of a let whose type is an array with three elements", () => {
    expect(varAssignmentBundle.arr.length).to.equal(3);
  });
});
