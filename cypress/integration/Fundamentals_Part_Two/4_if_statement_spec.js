import { bundle } from "../../../Fundamentals_Part_Two/4_if_statements";

describe("If statements control flow testing", () => {
  it("testing the implementation of if statements to assign the value of result to 88", () => {
    expect(bundle.result).to.equal(88);
  });
  it("testing the implementation of fizzbuzz challenge", () => {
    expect(bundle.fizzbuzz).to.eql([
      1,
      2,
      "fizz",
      4,
      "buzz",
      "fizz",
      7,
      8,
      "fizz",
      "buzz",
      11,
      "fizz",
      13,
      14,
      "fizzbuzz",
      16,
      17,
      "fizz",
      19,
      "buzz",
    ]);
  });
  it("testing the implementation of if statements to determine if a number is even, multiplying even numbers by 10", () => {
    expect(bundle.isItEven).to.eql([1, 20, 3, 40, 5, 60, 7, 80, 9, 100]);
  });
});
