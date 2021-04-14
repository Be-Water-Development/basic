import { bundle } from "../../../Fundamentals_Part_One/numbers_exponents_remainders";

describe("Exponents and operators testing", () => {
  it("testing the creating of the varaible sixSquared equal to 36", () => {
    expect(bundle.sixSquared).to.equal(36);
  });
  it("testing the creating of the varaible fourCubed equal to 64", () => {
    expect(bundle.fourCubed).to.equal(64);
  });
  it("testing the creating of the varaible sixtySixModSeven equal to 3", () => {
    expect(bundle.sixtySixModSeven).to.equal(3);
  });
  it("testing the creating of the varaible sixtySixModSeven equal to 7", () => {
    expect(bundle.sevenModEight).to.equal(7);
  });
});
