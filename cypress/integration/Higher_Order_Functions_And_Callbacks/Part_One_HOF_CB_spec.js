import { bundle } from "../../../Higher_Order_Functions_and_Callbacks/Part_One_HOF_CB";

describe("testing the invocation of function pastTense", () => {
  it("pastTense is of type function", () => {
    expect(typeof bundle.pastTense).to.equal("function");
  });
  it("the invocation of function pastTense to equal an array of strings", () => {
    cy.wrap({ pastTense: bundle.pastTense })
      .invoke("pastTense", ["climb", "row", "jump"])
      .should("deep.equal", ["climbed", "rowed", "jumped"]);
  });
});

describe("testing function map and callback function timesEleven", () => {
  it("map is of type function", () => {
    expect(typeof bundle.map).to.equal("function");
  });
  it("timesEleven is of type function", () => {
    expect(typeof bundle.timesEleven).to.equal("function");
  });
  it("invocation of function map with callback function times eleven to equal an array of numbers", () => {
    cy.wrap({ map: bundle.map })
      .invoke("map", [1, 2, 3, 4], bundle.timesEleven)
      .should("deep.equal", [11, 22, 33, 44]);
  });
});

describe("testing function mapTwo and forEach", () => {
  it("mapTwo is of type function", () => {
    expect(typeof bundle.mapTwo).to.equal("function");
  });
  it("forEach is of type function", () => {
    expect(typeof bundle.forEach).to.equal("function");
  });
  it("the invocation of mapTwo and forEach to equal an array of numbers", () => {
    cy.wrap({ forEach: bundle.forEach })
      .invoke("forEach", ["x", "y", "z"], (x) => console.log(x.toUpperCase()))
      .should("equal", undefined);
    cy.wrap({ map: bundle.mapTwo })
      .invoke("map", [1, 2, 3], (y) => y * 2)
      .should("deep.equal", [2, 4, 6]);
  });
});

describe("testing function filterThisArray and callback functions cb1 and cb2", () => {
  it("filterThisArray is of type function", () => {
    expect(typeof bundle.filterThisArray).to.equal("function");
  });
  it("cb1 & cb2 is of type function", () => {
    expect(typeof bundle.cb1).to.equal("function");
    expect(typeof bundle.cb2).to.equal("function");
  });
  it("the invocation of function filterThisArray with callback functions cb1 and cb2 to equal array of strings", () => {
    cy.wrap({ filterThisArray: bundle.filterThisArray })
      .invoke("filterThisArray", bundle.arrayOfThings, bundle.cb1)
      .should("deep.equal", ["CAT", "CATDOG", "WISHBONE"]);
    cy.wrap({ filterThisArray: bundle.filterThisArray })
      .invoke("filterThisArray", bundle.arrayOfThings, bundle.cb2)
      .should("deep.equal", ["dog", "wish"]);
  });
});

describe("testing function orFilter", () => {
  it("orFilter is of type function", () => {
    expect(typeof bundle.orFilter).to.equal("function");
  });
  it("the invocation of orFilter to equal elements that return true when passed into either callback", () => {
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
