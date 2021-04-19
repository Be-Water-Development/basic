import { bundle } from "../../../Higher_Order_Functions_and_Callbacks/Part_Two_HOF_CB";

describe("Higher order functions and callbacks testing, part two", () => {
  it("testing the invocation of function mapMe", () => {
    expect(typeof bundle.mapMe).to.equal("function");
    cy.wrap({ mapMe: bundle.mapMe })
      .invoke("mapMe", ["Nile", "Yangtze", "Ganges", "Orinoco"])
      .should("deep.equal", ["NILE", "YANGTZE", "GANGES", "ORINOCO"]);
  });
  it("testing the invocation of function reduce", () => {
    expect(typeof bundle.reduce).to.equal("function");
    cy.wrap({ reduce: bundle.reduce })
      .invoke("reduce", [1, 2, 3, 4], (num1, num2) => num1 + num2, 0)
      .should("equal", 10);
    cy.wrap({ reduce: bundle.reduce })
      .invoke("reduce", [1, 2, 3, 4], (num1, num2) => num1 + num2)
      .should("equal", 10);
    cy.wrap({ reduce: bundle.reduce })
      .invoke("reduce", { cats: "dogs" }, (num1, num2) => num1 + num2, 0)
      .should("equal", "this function requires an array as input");
  });
  it("testing the invocation of function reduceMe that multiplies all array elements", () => {
    expect(typeof bundle.reduceMe).to.equal("function");
    cy.wrap({ reduceMe: bundle.reduceMe })
      .invoke("reduceMe", [3, 2, 7, 4])
      .should("equal", 168);
  });
  it("testing the invocation of function crossRoads to find common array elements", () => {
    expect(typeof bundle.crossRoads).to.equal("function");
    cy.wrap({ crossRoads: bundle.crossRoads })
      .invoke("crossRoads", [
        [1, 6, 3, 4, 5],
        [7, 8, 4, 3, 7],
        [10, 3, 22, 4, 9],
      ])
      .should("deep.equal", [3, 4]);
  });
  it("testing the invocation of function duplicates to flatten nested arrays and remove duplicate elements", () => {
    expect(typeof bundle.duplicates).to.equal("function");
    cy.wrap({ duplicates: bundle.duplicates })
      .invoke("duplicates", [
        [1, 33, 56, 8, 99, 100],
        [33, 22, 100, 15, 8, 47],
        [8, 15, 44, 22, 56, 87],
      ])
      .should("deep.equal", [1, 33, 56, 8, 99, 100, 22, 15, 47, 44, 87]);
  });
});
