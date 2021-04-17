import { bundle } from "../../../Higher_Order_Functions_and_Callbacks/Part_One_HOF_CB";

describe("Higher order functions and callbacks testing", () => {
  it("testing the invocation of function pastTense", () => {
    expect(typeof bundle.pastTense).to.equal("function");
    cy.wrap({ pastTense: bundle.pastTense })
      .invoke("pastTense", ["climb", "row", "jump"])
      .should("deep.equal", ["climbed", "rowed", "jumped"]);
  });
});
