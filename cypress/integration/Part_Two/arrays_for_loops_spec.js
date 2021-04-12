import { bundle } from "../../../Part_Two/arrays_for_loops";

describe("Arrays for loops testing", () => {
  it("testing the iteration of the nums array with a for loop, multiplying each element by 11", () => {
    expect(bundle.nums).to.eql([11, 22, 33, 44, 55, 66]);
  });
});
