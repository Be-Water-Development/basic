import { bundle } from "../../../Async/async_part_three";

describe("testing function ajaxSimulate", () => {
  it("ajaxSimulate is of type function", () => {
    expect(typeof bundle.ajaxSimulate).to.equal("function");
  });
  it("dataStore is of type function", () => {
    expect(typeof bundle.dataStore).to.equal("function");
  });
  it("ajaxSimulate logs 'Mac' to the console after 0ms", () => {
    cy.spy(window.console, "log").as("consoleLog");
    cy.wrap({ ajaxSimulate: bundle.ajaxSimulate }).invoke(
      "ajaxSimulate",
      2,
      bundle.dataStore
    );
    cy.get("@consoleLog").should("be.calledWith", "Mac");
  });
});
