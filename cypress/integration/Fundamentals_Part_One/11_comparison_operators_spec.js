import { bundle } from "../../../Fundamentals_Part_One/11_comparison_operators";

describe("Comparison operators testing", () => {
  it("testing the creating of the varaible smallNum to equal 5", () => {
    expect(typeof bundle.smallNum).to.equal("number");
    expect(bundle.smallNum).to.equal(5);
  });
  it("testing the creating of the varaible bigNum to equal 10", () => {
    expect(typeof bundle.bigNum).to.equal("number");
    expect(bundle.bigNum).to.equal(10);
  });
  it("testing the comparison of bigNum being greater than smallNum", () => {
    expect(bundle.isBigger).to.equal(true);
  });
  it("testing the creating of the varaible favNum of type number", () => {
    expect(typeof bundle.favNum).to.equal("number");
  });
  it("testing the creating of the varaible favNumString of type string", () => {
    expect(typeof bundle.favNumString).to.equal("string");
  });
  it("testing the creating of the varaible isLooselyEqual with the value equal to the evaluation of favNum == favNumString", () => {
    expect(bundle.isLooselyEqual).to.equal(true);
  });
  it("testing the creating of the varaible isStrictlyEqual with the value equal to the evaluation of favNum === favNumString", () => {
    expect(bundle.isStrictlyEqual).to.equal(false);
  });
});
