import { bundle } from "../../../Fundamentals_Part_One/12_type_coercion_and_typeof_operator";

describe("type coercion and typeof operator testing", () => {
  it("testing the creation of the varaible stringOrNum equal to the string value 1055", () => {
    expect(bundle.stringOrNum).to.equal("1055");
  });
  it("testing the creating of the variable favFoodType equal to type string", () => {
    expect(bundle.favFoodType).to.equal("string");
  });
  it("testing the creating of the variable timesEatenType equal to type number", () => {
    expect(bundle.timesEatenType).to.equal("number");
  });
  it("testing the creating of the variable eatAgainType equal to type boolean", () => {
    expect(bundle.eatAgainType).to.equal("boolean");
  });
  it("testing the creating of the variable ripeProgressionArray equal to boolean true", () => {
    expect(bundle.ripeProgressionArray).to.equal(true);
  });
});
