import { bundle } from "../../../Part_One/string_concatenation";

describe("welcomeStatement testing", () => {
  it("welcomeStatement is equal to `Welcome to the jungle!`", () => {
    expect(bundle.welcomeStatement).to.equal("Welcome to the jungle!");
  });
  it("welcomeStatement contains three spaces", () => {
    expect(
      bundle.welcomeStatement.split("").filter((el) => el === " ").length
    ).to.equal(3);
  });
});
