import { bundle } from "../../../Fundamentals_Part_One/4_template_literal";

describe("Template Literal testing", () => {
  it("testing the creating of varible x whose type is a number", () => {
    expect(typeof bundle.x).to.equal("number");
  });
  it("testing the creating of varible y whose type is a number", () => {
    expect(typeof bundle.y).to.equal("number");
  });
  it("testing the creating of varible solution whose type is a string, with the last value equal the sum of x + y", () => {
    expect(typeof bundle.solution).to.equal("string");
    expect(bundle.solution.split(" ").pop()).to.equal(
      (bundle.x + bundle.y).toString()
    );
  });
});
