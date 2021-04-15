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
});
