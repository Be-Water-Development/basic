import { bundle } from "../../../Higher_Order_Functions_and_Callbacks/Part_Three_HOF_CB";

describe("testing function messOfArrays", () => {
  it("messOfArrays is of type function", () => {
    expect(typeof bundle.messOfArrays).to.equal("function");
  });
  it("the invocation of function messOfArrays to equal an object", () => {
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
});

describe("testing function amITrue", () => {
  it("amITrue is of type function", () => {
    expect(typeof bundle.amITrue).to.equal("function");
  });
  it("the invocation of function amITrue to equal a boolean", () => {
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
