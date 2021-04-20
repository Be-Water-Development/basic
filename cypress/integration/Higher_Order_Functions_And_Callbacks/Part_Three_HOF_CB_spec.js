import { bundle } from "../../../Higher_Order_Functions_and_Callbacks/Part_Three_HOF_CB";

describe("Higher order functions and callbacks testing, part three", () => {
  it("testing the invocation of function messOfArrays to return an object", () => {
    expect(typeof bundle.messOfArrays).to.equal("function");
    cy.wrap({ messOfArrays: bundle.messOfArrays })
      .invoke(
        "messOfArrays",
        ["Goat", "Goose", "Cow", "Sheep"],
        [
          (s) => s.toUpperCase(),
          (s) => s.toLowerCase(),
          (s) => s + " " + s.length,
          (s) => s.slice(s.length - 1),
        ]
      )
      .should("deep.equal", {
        Goat: ["GOAT", "goat", "Goat 4", "t"],
        Goose: ["GOOSE", "goose", "Goose 5", "e"],
        Cow: ["COW", "cow", "Cow 3", "w"],
        Sheep: ["SHEEP", "sheep", "Sheep 5", "p"],
      });
  });
  it("testing the invocation of function amITrue to return a boolean", () => {
    expect(typeof bundle.amITrue).to.equal("function");
    cy.wrap({ amITrue: bundle.amITrue })
      .invoke(
        "amITrue",
        [15, 5, 30, 90, 2],
        (num) => num % 3 === 0,
        (num) => num % 5 === 0
      )
      .should("equal", true);
    cy.wrap({ amITrue: bundle.amITrue })
      .invoke(
        "amITrue",
        [22, 5, 45, 90, 17],
        (num) => num % 3 === 0,
        (num) => num % 5 === 0
      )
      .should("equal", false);
    cy.wrap({ amITrue: bundle.amITrue })
      .invoke(
        "amITrue",
        [16, 45, 90, 77],
        (num) => num % 3 === 0,
        (num) => num % 5 === 0
      )
      .should("equal", false);
  });
});
