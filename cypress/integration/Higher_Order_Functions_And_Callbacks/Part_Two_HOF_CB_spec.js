import { bundle } from "../../../Higher_Order_Functions_and_Callbacks/Part_Two_HOF_CB";

describe("testing function mapMe", () => {
  it("mapMe is of type function", () => {
    expect(typeof bundle.mapMe).to.equal("function");
  });
  it("the invocation of function mapMe to equal an array of strings", () => {
    cy.wrap({ mapMe: bundle.mapMe })
      .invoke("mapMe", ["Nile", "Yangtze", "Ganges", "Orinoco"])
      .should("deep.equal", ["NILE", "YANGTZE", "GANGES", "ORINOCO"]);
  });
});

describe("testing function reduce", () => {
  it("reduce is of type function", () => {
    expect(typeof bundle.reduce).to.equal("function");
  });
  it("the invocation of function reduce to equal sum of array elements or guard clause", () => {
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
});

describe("testing function reduceMe", () => {
  it("reduceMe is of type function", () => {
    expect(typeof bundle.reduceMe).to.equal("function");
  });
  it("the invocation of function reduceMe to equal the multiplication of all array elements", () => {
    cy.wrap({ reduceMe: bundle.reduceMe })
      .invoke("reduceMe", [3, 2, 7, 4])
      .should("equal", 168);
  });
});

describe("testing function crossRoads", () => {
  it("crossRoads is of type function", () => {
    expect(typeof bundle.crossRoads).to.equal("function");
  });
  it("the invocation of function crossRoads equal an array of common array elements", () => {
    cy.wrap({ crossRoads: bundle.crossRoads })
      .invoke("crossRoads", [
        [1, 6, 3, 4, 5],
        [7, 8, 4, 3, 7],
        [10, 3, 22, 4, 9],
      ])
      .should("deep.equal", [3, 4]);
  });
});

describe("testing function duplicates", () => {
  it("duplicates is of type function", () => {
    expect(typeof bundle.duplicates).to.equal("function");
  });
  it("the invocation of function duplicates to equal a flat array with duplicate elements removed", () => {
    cy.wrap({ duplicates: bundle.duplicates })
      .invoke("duplicates", [
        [1, 33, 56, 8, 99, 100],
        [33, 22, 100, 15, 8, 47],
        [8, 15, 44, 22, 56, 87],
      ])
      .should("deep.equal", [1, 33, 56, 8, 99, 100, 22, 15, 47, 44, 87]);
  });
});

describe("testing function matchMe", () => {
  it("matchMe is of type function", () => {
    expect(typeof bundle.matchMe).to.equal("function");
  });
  it("the invocation of function matchMe to equal an object", () => {
    cy.wrap({ matchMe: bundle.matchMe })
      .invoke(
        "matchMe",
        ["pancakes", "bacon", "juice", "eggs", "toast"],
        ["PANCAKES", "BACON", "juice", "EGGS", "toast"],
        (s) => s.toUpperCase()
      )
      .should("deep.equal", {
        pancakes: "PANCAKES",
        bacon: "BACON",
        eggs: "EGGS",
      });
  });
});

describe("testing function arrIntoObj", () => {
  it("arrIntoObj is of type function", () => {
    expect(typeof bundle.arrIntoObj).to.equal("function");
  });
  it("the invocation of function arrIntoObj to equal an object", () => {
    cy.wrap({ arrIntoObj: bundle.arrIntoObj })
      .invoke("arrIntoObj", ["ORANGE", "PINEAPPLE", "MANGO"], (s) =>
        s.toLowerCase()
      )
      .should("deep.equal", {
        ORANGE: "orange",
        PINEAPPLE: "pineapple",
        MANGO: "mango",
      });
  });
});
