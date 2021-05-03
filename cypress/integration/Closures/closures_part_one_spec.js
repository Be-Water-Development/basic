import { bundle } from "../../../Closures/closures_part_one";

describe("testing function welcomeTo", () => {
  it("welcomeTo is of type function", () => {
    expect(typeof bundle.welcomeTo).to.equal("function");
  });
  it("the invocation of myFunc to equal a string", () => {
    cy.wrap({ myFunc: bundle.myFunc })
      .invoke("myFunc")
      .should("equal", "Welcome to closures!");
  });
});
