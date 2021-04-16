import { bundle } from "../../../Functions_Execution_Context/Part_Three_Functions";

describe("Functions part three testing", () => {
  it("testing the invocation of function sunshine to return the appropriate string based in arugment hour", () => {
    expect(typeof bundle.sunshine).to.equal("function");
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
  it("testing the invocation of function getGrade to return the appropriate grade based on argument grade", () => {
    expect(typeof bundle.getGrade).to.equal("function");
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
  it("testing the invocation of function treasure to locate the string 'treasure' inside the argument array", () => {
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
  it("testing the invocation of function endsWithS to return an array of strings that end with 's'", () => {
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
  it("testing the invoation of function y2K to locate the number 2000 inside the argument array", () => {
    cy.wrap({ y2K: bundle.y2K })
      .invoke("y2K", [1999, 3000, 2400, 4700, 1800, 7000])
      .should("equal", "World still exists");
    cy.wrap({ y2K: bundle.y2K })
      .invoke("y2K", [1000, 2038, 2000, 1876, 1492, 1899])
      .should("equal", "It's the end of the world!");
  });
  it("testing the invocation of function addX to add parameter X to each array item, returning the updated array", () => {
    expect(typeof bundle.addX).to.equal("function");
    cy.wrap({ addX: bundle.addX })
      .invoke("addX", [1, 2, 3, 4], 2)
      .should("deep.equal", [3, 4, 5, 6]);
    cy.wrap({ addX: bundle.addX })
      .invoke("addX", [7, 8, 9, 10], 10)
      .should("deep.equal", [17, 18, 19, 20]);
  });
});
