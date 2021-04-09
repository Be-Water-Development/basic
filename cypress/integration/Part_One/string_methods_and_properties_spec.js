import { bundle } from "../../../Part_One/string_methods_and_properties";

describe("String methods and properites testing", () => {
  it("testing the creation of variable count that is equal to the length of 16", () => {
    expect(bundle.lengthCount).to.equal(16);
  });
  it("testing the creation of variable upper that is equal to all uppercase letters", () => {
    expect(bundle.upperCase).to.equal("GREEN IS THE COLOR");
  });
  it("testing the creation of variable lower that is equal to all lowercase letters", () => {
    expect(bundle.lowerCase).to.equal("green is the color");
  });
});
