import { bundle } from "../../../Higher_Order_Functions_and_Callbacks/Part_One_HOF_CB";

describe("Higher order functions and callbacks testing, part one", () => {
  it("testing the invocation of function pastTense", () => {
    expect(typeof bundle.pastTense).to.equal("function");
    cy.wrap({ pastTense: bundle.pastTense })
      .invoke("pastTense", ["climb", "row", "jump"])
      .should("deep.equal", ["climbed", "rowed", "jumped"]);
  });
  it("testing invocation of function map with a callback function", () => {
    expect(typeof bundle.map).to.equal("function");
    expect(typeof bundle.timesEleven).to.equal("function");
    cy.wrap({ map: bundle.map })
      .invoke("map", [1, 2, 3, 4], bundle.timesEleven)
      .should("deep.equal", [11, 22, 33, 44]);
  });
  it("testing invocation of function mapTwo and forEach", () => {
    expect(typeof bundle.mapTwo).to.equal("function");
    expect(typeof bundle.forEach).to.equal("function");
    cy.wrap({ forEach: bundle.forEach })
      .invoke("forEach", ["x", "y", "z"], (x) => console.log(x.toUpperCase()))
      .should("equal", undefined);
    cy.wrap({ map: bundle.mapTwo })
      .invoke("map", [1, 2, 3], (y) => y * 2)
      .should("deep.equal", [2, 4, 6]);
  });
  it("testing the addition of code to callback functions cb1 and cb2 to complete filterThisArray", () => {
    cy.wrap({ filterThisArray: bundle.filterThisArray })
      .invoke("filterThisArray", bundle.arrayOfThings, bundle.cb1)
      .should("deep.equal", ["CAT", "CATDOG", "WISHBONE"]);
    cy.wrap({ filterThisArray: bundle.filterThisArray })
      .invoke("filterThisArray", bundle.arrayOfThings, bundle.cb2)
      .should("deep.equal", ["dog", "wish"]);
  });
  it("testing the invocation of orFilter to return truthy elements when passed into either callback", () => {
    expect(typeof bundle.orFilter).to.equal("function");
    cy.wrap({ orFilter: bundle.orFilter })
      .invoke(
        "orFilter",
        ["bobcats", "monkeys", "seal", "lizard", "snake", "elephant"],
        (s) => s.endsWith("s"),
        (k) => k.startsWith("s")
      )
      .should("deep.equal", ["bobcats", "monkeys", "seal", "snake"]);
  });
});
