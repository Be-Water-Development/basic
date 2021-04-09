import { bundle } from "../../../Part_One/numbers_assignment_operators";

describe("Assignment operators testing", () => {
  it("testing the use of the addition assigment operator on the varaible numToAdd to equal 32", () => {
    expect(bundle.numToAdd).to.equal(32);
  });
  it("testing the use of the subtraction assigment operator on the varaible numToSubtract to equal 7", () => {
    expect(bundle.numToSubtract).to.equal(7);
  });
  it("testing the use of the multiplication assigment operator on the varaible numToMultiply to equal 70", () => {
    expect(bundle.numToMultiply).to.equal(70);
  });
  it("testing the use of the division assigment operator on the varaible numToDivide to equal 4", () => {
    expect(bundle.numToDivide).to.equal(4);
  });
});
