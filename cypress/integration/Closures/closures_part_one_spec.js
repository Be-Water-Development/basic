import { bundle } from "../../../Closures/closures_part_one";

describe("testing function welcomeTo", () => {
  it("welcomeTo is of type function", () => {
    expect(typeof bundle.welcomeTo).to.equal("function");
  });
  it("the invocation of myFunc to equal a string", () => {
    cy.wrap({ myFunc: bundle.myFunc })
      .invoke("myFunc")
      .should("equal", "Welcome to closures!");
  });
});

describe("testing function passingStrings", () => {
  it("passing strings is of type function", () => {
    expect(typeof bundle.passingStrings).to.equal("function");
  });
  it("the invocation of passedFunc to equal a string", () => {
    cy.wrap({ passedFunc: bundle.passedFunc })
      .invoke("passedFunc")
      .should("equal", "Hello world");
  });
});

describe("testing function addByY", () => {
  it("addByY is of type function", () => {
    expect(typeof bundle.addByY).to.equal("function");
  });
  it("the invocation of addByThree to equal a number", () => {
    cy.wrap({ addByThree: bundle.addByThree })
      .invoke("addByThree", 3)
      .should("equal", 6);
  });
});

describe("testing function oneTime", () => {
  it("oneTime should be of type function", () => {
    expect(typeof bundle.oneTime).to.equal("function");
  });
  it("the invocation of timesElevenOneTime to equal the return value from the first invocation for subsequent calls", () => {
    cy.wrap({ timesElevenOneTime: bundle.timesElevenOneTime })
      .invoke("timesElevenOneTime", 2)
      .should("equal", 22);
    cy.wrap({ timesElevenOneTime: bundle.timesElevenOneTime })
      .invoke("timesElevenOneTime", 3)
      .should("equal", 22);
    cy.wrap({ timesElevenOneTime: bundle.timesElevenOneTime })
      .invoke("timesElevenOneTime", 4)
      .should("equal", 22);
  });
});
