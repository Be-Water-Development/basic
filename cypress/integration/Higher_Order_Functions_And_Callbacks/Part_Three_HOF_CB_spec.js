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

describe("testing function sortMe", () => {
  it("sortMe is of type function", () => {
    expect(typeof bundle.sortMe).to.equal("function");
  });
  it("the invocation of function sortMe to return a sorted array", () => {
    cy.wrap({ sortMe: bundle.sortMe })
      .invoke(
        "sortMe",
        ["spider", "avocados", "panther", "antelope", "cheetah", "aardvark"],
        (s) => s.toLowerCase().startsWith("a")
      )
      .should("deep.equal", [
        "avocados",
        "antelope",
        "aardvark",
        "spider",
        "panther",
        "cheetah",
      ]);
  });
});

describe("testing function byFive", () => {
  it("byFive is of type function", () => {
    expect(typeof bundle.byFive).to.equal("function");
  });
  it("the invocation of function byFive to equal an object", () => {
    cy.wrap({ byFive: bundle.byFive })
      .invoke("byFive", [1, 8, 30, 35, 17, 85, 5, 100], (num) =>
        num % 5 === 0 ? "fives" : "others"
      )
      .should("deep.equal", { others: 3, fives: 5 });
  });
});

describe("testing function groupMe", () => {
  it("groupMe is of type function", () => {
    expect(typeof bundle.groupMe).to.equal("function");
  });
  it("the invocation of function groupMe to equal an object", () => {
    cy.wrap({ groupMe: bundle.groupMe })
      .invoke("groupMe", [2.1, 3.1, 2.2, 3.3, 3.4], (num) => Math.round(num))
      .should("deep.equal", { 2: [2.1, 2.2], 3: [3.1, 3.3, 3.4] });
  });
});

describe("testing function elloKeys", () => {
  it("elloKeys if of type function", () => {
    expect(typeof bundle.elloKeys).to.equal("function");
  });
  it("the invocation of function elloKeys to equal an array", () => {
    cy.wrap({ elloKeys: bundle.elloKeys })
      .invoke(
        "elloKeys",
        {
          good: "jello",
          cat: "bean",
          job: "mellow",
          with: "fellow",
          dog: "dirt",
          this: "bellow",
          chester: "bacon",
          unit: "cellos",
        },
        (string) => string.slice(1, 5).toLowerCase() === "ello"
      )
      .should("deep.equal", ["good", "job", "with", "this", "unit"]);
  });
});
