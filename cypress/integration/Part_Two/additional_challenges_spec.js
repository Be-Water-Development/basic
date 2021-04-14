import { bundle } from "../../../Part_Two/additional_challenges";

describe("Additional array and object challenges testing", () => {
  it("testing the implementation of a for loop to add nested subarrays to an array", () => {
    expect(bundle.nestedSubarray).to.eql([
      ["iteration0, 0"],
      ["iteration1, 1"],
      ["iteration2, 2"],
      ["iteration3, 3"],
      ["iteration4, 4"],
      ["iteration5, 5"],
      ["iteration6, 6"],
      ["iteration7, 7"],
    ]);
  });
  it("testing the implementation of a for loop and string method startsWith('s') to add to sStrings object with string as key, index as value", () => {
    expect(bundle.sStrings).to.eql({ snake: 0, spider: 2, seal: 4 });
  });
  it("testing the implementation of a for.. in loop to iterate over addThis and sum the values of type number to varaible sum", () => {
    expect(bundle.sum).to.equal(18);
  });
});
