import { bundle } from "../../../Functions_Execution_Context/Part_Five_Functions";

describe("Functions part five testing", () => {
  it("testing the invocation of function sumOfOddThings that returns two nested arrays", () => {
    expect(typeof bundle.sumOfOddThings).to.equal("function");
    cy.wrap({ sumOfOddThings: bundle.sumOfOddThings })
      .invoke("sumOfOddThings", [1, 2, 3, 4, 5], [6, 7, 8, 9, 10])
      .should("deep.equal", [
        [17, 20, 190, 40, 210],
        [6, 16, 8, 18, 10],
      ]);
  });
  it("testing the invocation of function removeVowels", () => {
    expect(typeof bundle.removeVowels).to.equal("function");
    cy.wrap({ removeVowels: bundle.removeVowels })
      .invoke("removeVowels", "MT BACHELOR")
      .should("equal", "MT BCHLR");
    cy.wrap({ removeVowels: bundle.removeVowels })
      .invoke("removeVowels", "Mount Thielsen")
      .should("equal", "Mnt Thlsn");
  });
  it("testing the invocation of function addPear to add key/value pair to object", () => {
    expect(typeof bundle.addPear).to.equal("function");
    cy.wrap({ addPear: bundle.addPear })
      .invoke("addPear", {
        strawberry: "red",
        blueberry: "blue",
        banana: "yellow",
      })
      .should("deep.equal", {
        strawberry: "red",
        blueberry: "blue",
        banana: "yellow",
        pear: "green",
      });
  });
  it("testing the invocation of function whereInTheWorld to find the key 'Carmen' and return the assoicated value", () => {
    expect(typeof bundle.whereInTheWorld).to.equal("function");
    cy.wrap({ whereInTheWorld: bundle.whereInTheWorld })
      .invoke("whereInTheWorld", {
        Elvis: "Presley",
        Steven: "Spielburg",
        Elizabeth: "Taylor",
      })
      .should("equal", "Where in the world is Carmen Sandiego?");
    cy.wrap({ whereInTheWorld: bundle.whereInTheWorld })
      .invoke("whereInTheWorld", {
        London: "England",
        Barcelona: "Spain",
        Moscow: "Russia",
        Carmen: "Sandiego",
      })
      .should("equal", "Sandiego");
  });
  it("testing the invocation of function buildArray to return the key, value number of times", () => {
    expect(typeof bundle.buildArray).to.equal("function");
    cy.wrap({ buildArray: bundle.buildArray })
      .invoke("buildArray", { turkey: 3, gobble: 2 })
      .should("deep.equal", ["turkey", "turkey", "turkey", "gobble", "gobble"]);
    cy.wrap({ buildArray: bundle.buildArray })
      .invoke("buildArray", {})
      .should("deep.equal", []);
  });
  it("testing the assignment of funtion endOfUnit to the variable theEnd", () => {
    expect(typeof bundle.theEnd).to.equal("function");
    cy.wrap({ theEnd: bundle.theEnd })
      .invoke("theEnd")
      .should("equal", "Congrats, you completed the functions unit!");
  });
});
