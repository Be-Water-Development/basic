import { bundle } from "../../../Async/async_part_five";

describe("testing function order", () => {
  it("order is of type function", () => {
    expect(typeof bundle.order).to.equal("function");
  });
  it("order logs 'green', 'eggs', and '& ham' in correct order", () => {
    cy.spy(window.console, "log").as("consoleLog");
    cy.get("@consoleLog").should("have.callCount", 3);
    // How do you get cypress to care about order of console.logs...
    cy.get("@consoleLog").should("be.calledWith", "green");
    cy.get("@consoleLog").should("be.calledWith", "eggs");
    cy.get("@consoleLog").should("be.calledWith", "& ham");
  });
});
