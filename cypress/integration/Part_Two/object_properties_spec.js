import { bundle } from "../../../Part_Two/object_properties";

describe("Objects and for.. in loops testing", () => {
  it("testing the iteration of items object with a for in loop, assigning the value of found to boolean true", () => {
    expect(bundle.found).to.equal(true);
  });
  it("testing the iteration of objOfNums array, pushing the nums greater than 5 into greaterThanFiveArray", () => {
    expect(bundle.greaterThanFive).to.eql([22, 16, 9]);
  });
  it("testing the creation of an ages array with Object.values(people)", () => {
    expect(bundle.ages).to.eql([17, 25, 66, 42]);
  });
  it("testing the iteration of ages array to assign the value of ageByFive to boolean true", () => {
    expect(bundle.ageByFive).to.equal(true);
  });
});
