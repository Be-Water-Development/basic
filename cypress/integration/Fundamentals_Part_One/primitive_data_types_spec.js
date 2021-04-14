import { bundle } from "../../../Fundamentals_Part_One/primitive_data_types";

describe("Primitive Data Types testing", () => {
  it("testing birthCity is indeed a string", () => {
    expect(typeof bundle.birthCity).to.equal("string");
  });
  it("testing birthYear is indeed a number", () => {
    expect(typeof bundle.birthYear).to.equal("number");
  });
  it("testing loveCoding is true", () => {
    expect(bundle.loveCoding).to.equal(true);
  });
  it("testing programmingHesitations is null", () => {
    expect(bundle.programmingHesitations).to.equal(null);
  });
});
