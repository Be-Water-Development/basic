import { primitiveDataTypeBundle } from "../../../../Part_One/primitive_data_types";

describe("Primitive Data Types testing", () => {
  it("testing birthCity is indeed a string", () => {
    expect(typeof primitiveDataTypeBundle.birthCity).to.equal("string");
  });
  it("testing birthYear is indeed a number", () => {
    expect(typeof primitiveDataTypeBundle.birthYear).to.equal("number");
  });
  it("testing loveCoding is true", () => {
    expect(primitiveDataTypeBundle.loveCoding).to.equal(true);
  });
  it("testing programmingHesitations is null", () => {
    expect(primitiveDataTypeBundle.programmingHesitations).to.equal(null);
  });
});
