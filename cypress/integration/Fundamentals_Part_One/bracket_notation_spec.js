import { bundle } from "../../../Fundamentals_Part_One/bracket_notation";

describe("bracket notation testing", () => {
  it("testing the creation of variable firstChar that is equal to the string 'w'", () => {
    expect(bundle.first).to.equal("w");
  });
  it("testing the creation of variable tenthChar that is equal to the string 'h'", () => {
    expect(bundle.tenth).to.equal("h");
  });
  it("testing the creation of variable lastChar that is equal to the string 's'", () => {
    expect(bundle.last).to.equal("s");
  });
});
