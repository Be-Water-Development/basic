import { bundle } from "../../../Functions_Execution_Context/Part_Three_Functions";

describe("testing function sunshine ", () => {
  it("sunshine is of type function", () => {
    expect(typeof bundle.sunshine).to.equal("function");
  });
  it("the invocation of function sunshine to equal the appropriate string based in arugment hour", () => {
    cy.wrap({ sunshine: bundle.sunshine })
      .invoke("sunshine", 4)
      .should("equal", "Sun will rise soon");
    cy.wrap({ sunshine: bundle.sunshine })
      .invoke("sunshine", 6)
      .should("equal", "Sun is up");
    cy.wrap({ sunshine: bundle.sunshine })
      .invoke("sunshine", 10)
      .should("equal", "Sun is up");
    cy.wrap({ sunshine: bundle.sunshine })
      .invoke("sunshine", 19)
      .should("equal", "Sun is setting");
    cy.wrap({ sunshine: bundle.sunshine })
      .invoke("sunshine", 24)
      .should("equal", "Sun is setting");
  });
});

describe("testing function getGrade", () => {
  it("getGrade is of type function", () => {
    expect(typeof bundle.getGrade).to.equal("function");
  });
  it("the invocation of function getGrade to equal string grade", () => {
    cy.wrap({ getGrade: bundle.getGrade })
      .invoke("getGrade", 96)
      .should("equal", "A");
    cy.wrap({ getGrade: bundle.getGrade })
      .invoke("getGrade", 80)
      .should("equal", "B");
    cy.wrap({ getGrade: bundle.getGrade })
      .invoke("getGrade", 74)
      .should("equal", "C");
    cy.wrap({ getGrade: bundle.getGrade })
      .invoke("getGrade", 66)
      .should("equal", "D");
    cy.wrap({ getGrade: bundle.getGrade })
      .invoke("getGrade", 55)
      .should("equal", "F");
  });
});

describe("testing function treasure", () => {
  it("treasure is of type function", () => {
    expect(typeof bundle.treasure).to.equal("function");
  });
  it("the invocation of function treasure to equal string 'Treasure found!' or 'Keep searching!'", () => {
    cy.wrap({ treasure: bundle.treasure })
      .invoke("treasure", [
        "turtles",
        "squid",
        "ship wreck",
        "whale",
        "treasure",
      ])
      .should("equal", "Treasure found!");
    cy.wrap({ treasure: bundle.treasure })
      .invoke("treasure", [
        "sand",
        "seal",
        "dolphin",
        "seasquatch",
        "kelp",
        "urchins",
      ])
      .should("equal", "Keep searching!");
  });
});

describe("testing function endsWithS ", () => {
  it("endsWithS is of type function", () => {
    expect(typeof bundle.endsWithS).to.equal("function");
  });
  it("the invocation of function endsWithS to equal array with strings that end with 's'", () => {
    cy.wrap({ endsWithS: bundle.endsWithS })
      .invoke("endsWithS", [
        "lions",
        "lynx",
        "penguins",
        "tiger",
        "snakes",
        "otters",
        "meerkat",
      ])
      .should("deep.equal", ["lions", "penguins", "snakes", "otters"]);
  });
});

describe("testing function y2K", () => {
  it("y2K is of type function", () => {
    expect(typeof bundle.y2K).to.equal("function");
  });
  it("the invoation of function y2K to equal string 'World still exists' or 'It's the end of the world!'", () => {
    cy.wrap({ y2K: bundle.y2K })
      .invoke("y2K", [1999, 3000, 2400, 4700, 1800, 7000])
      .should("equal", "World still exists");
    cy.wrap({ y2K: bundle.y2K })
      .invoke("y2K", [1000, 2038, 2000, 1876, 1492, 1899])
      .should("equal", "It's the end of the world!");
  });
});

describe("testing function addX", () => {
  it("addX is of type function", () => {
    expect(typeof bundle.addX).to.equal("function");
  });
  it("the invocation of function addX to equal array with each element incremented by x", () => {
    cy.wrap({ addX: bundle.addX })
      .invoke("addX", [1, 2, 3, 4], 2)
      .should("deep.equal", [3, 4, 5, 6]);
    cy.wrap({ addX: bundle.addX })
      .invoke("addX", [7, 8, 9, 10], 10)
      .should("deep.equal", [17, 18, 19, 20]);
  });
});
