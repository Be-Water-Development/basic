import { bundle } from "../../../Fundamentals_Part_One/numbers_incrementor_decrementor";

describe("Incrementor and decrementor testing", () => {
  it("testing the use of the increment operator to add 1 to 4 to equal 5", () => {
    expect(bundle.numToAdd).to.equal(5);
  });
  it("testing the use of the decrement operator to subtract 1 from 10 to equal 9", () => {
    expect(bundle.numToSubtract).to.equal(9);
  });
});
