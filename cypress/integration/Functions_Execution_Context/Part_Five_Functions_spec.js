import { bundle } from "../../../Functions_Execution_Context/Part_Five_Functions";

describe("testing function sumOfOddThings", () => {
  it("sumOfOddThings is of type function", () => {
    expect(typeof bundle.sumOfOddThings).to.equal("function");
  });
  it("the invocation of function sumOfOddThings to equal two nested arrays", () => {
    cy.wrap({ sumOfOddThings: bundle.sumOfOddThings })
      .invoke("sumOfOddThings", [1, 2, 3, 4, 5], [6, 7, 8, 9, 10])
      .should("deep.equal", [
        [17, 20, 190, 40, 210],
        [6, 16, 8, 18, 10],
      ]);
  });
});

describe("testing function removeVowels", () => {
  it("removeVowels is of type function", () => {
    expect(typeof bundle.removeVowels).to.equal("function");
  });
  it("the invocation of function removeVowels to equal string without vowels", () => {
    cy.wrap({ removeVowels: bundle.removeVowels })
      .invoke("removeVowels", "MT BACHELOR")
      .should("equal", "MT BCHLR");
    cy.wrap({ removeVowels: bundle.removeVowels })
      .invoke("removeVowels", "Mount Thielsen")
      .should("equal", "Mnt Thlsn");
  });
});

describe("testing function addPear", () => {
  it("addPear is of type function", () => {
    expect(typeof bundle.addPear).to.equal("function");
  });
  it("the invocation of function addPear to equal object with key/value pair added", () => {
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
});

describe("testing function whereInTheWorld", () => {
  it("whereInTheWorld is of type function", () => {
    expect(typeof bundle.whereInTheWorld).to.equal("function");
  });
  it("the invocation of function whereInTheWorld to equal the value assoicated with the key 'Carmen'", () => {
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
});

describe("testing function buildArray", () => {
  it("buildArray is of type function", () => {
    expect(typeof bundle.buildArray).to.equal("function");
  });
  it("the invocation of function buildArray to equal key, value number of times", () => {
    cy.wrap({ buildArray: bundle.buildArray })
      .invoke("buildArray", { turkey: 3, gobble: 2 })
      .should("deep.equal", ["turkey", "turkey", "turkey", "gobble", "gobble"]);
    cy.wrap({ buildArray: bundle.buildArray })
      .invoke("buildArray", {})
      .should("deep.equal", []);
  });
});

describe("testing function endOfUnit and anonymous function expression theEnd", () => {
  it("theEnd is of type function", () => {
    expect(typeof bundle.theEnd).to.equal("function");
  });
  it("the invocation of variable theEnd to equal the invocation of function endOfUnit", () => {
    cy.wrap({ theEnd: bundle.theEnd })
      .invoke("theEnd")
      .should("equal", "Congrats, you completed the functions unit!");
  });
});
