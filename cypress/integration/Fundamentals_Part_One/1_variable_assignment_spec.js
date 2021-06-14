import { bundle } from "../../../Fundamentals_Part_One/1_variable_assignment";

describe("Variable Assignment testing", () => {
  it("testing the creation of a var whose type is number and value is 10", () => {
    expect(typeof bundle.num).to.equal("number");
    expect(bundle.num).to.equal(10);
  });
  it("testing the creation of a let whose type is an array with three elements", () => {
    expect(bundle.arr.length).to.equal(3);
    expect(Array.isArray(bundle.arr)).to.equal(true);
  });
  it("testing the creation of a const whose type is an object with two keys", () => {
    expect(typeof bundle.obj).to.equal("object");
    expect(Object.keys(bundle.obj).length).to.equal(2);
    expect(bundle.obj.num).to.equal(10);
    expect(bundle.obj.arr.length).to.equal(3);
  });
});
