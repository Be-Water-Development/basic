import { bundle } from "../../../Async/async_part_two";

describe("testing forEach and timeLog functions", () => {
  it("forEach is of type function", () => {
    expect(typeof bundle.forEach).to.equal("function");
  });
  it("timeLog is of type function", () => {
    expect(typeof bundle.timeLog).to.equal("function");
  });
  it("outputs are logged in correct order", () => {
    cy.spy(window.console, "log").as("consoleLog");
    // Xavyr: Can't get cypress to care about order of console logs, any ideas?
    cy.get("@consoleLog").should("have.callCount", 4);
    cy.get("@consoleLog").should("be.calledWith", "printing element 0");
    cy.get("@consoleLog").should("be.calledWith", "printing element 3");
    cy.get("@consoleLog").should("be.calledWith", "printing element 1");
    cy.get("@consoleLog").should("be.calledWith", "printing element 2");
  });
});
