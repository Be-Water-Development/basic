import { bundle } from "../../../Fundamentals_Part_One/7_numbers_numeric_operators";

describe("Numeric Operators testing", () => {
  it("testing the creation of varaible oneHundred equal to 100", () => {
    expect(bundle.num).to.equal(100);
  });
  it("testing the creation of varaible plusTen equal to 110", () => {
    expect(bundle.plusTen).to.equal(110);
  });
  it("testing the creation of varaible minusTen equal to 90", () => {
    expect(bundle.minusTen).to.equal(90);
  });
  it("testing the creation of varaible timesTen equal to 1000", () => {
    expect(bundle.timesTen).to.equal(1000);
  });
  it("testing the creation of varaible divideByFive equal to 20", () => {
    expect(bundle.divideByFive).to.equal(20);
  });
});
