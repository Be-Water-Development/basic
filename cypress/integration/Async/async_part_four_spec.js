import { bundle } from "../../../Async/async_part_four";

describe("testing function runAtInterval", () => {
  it("runAtInterval is of type function", () => {
    expect(typeof bundle.runAtInterval).to.equal("function");
  });
  it("runAtInteval prints 'interval' to the console six times", () => {
    cy.spy(window.console, "log").as("consoleLog");
    cy.get("@consoleLog").should("be.calledWith", "interval");
    cy.get("@consoleLog").should("have.callCount", 6);
  });
});
