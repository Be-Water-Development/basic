import { bundle } from "../../../Functions_Execution_Context/Part_One_Functions";

describe("testing function addTen", () => {
  it("function addTen is of type function", () => {
    expect(typeof bundle.addTen).to.equal("function");
  });
  it("the invocation of addTen(5) is equal to 15", () => {
    cy.wrap({ addTen: bundle.addTen }).invoke("addTen", 5).should("equal", 15);
  });
});

describe("testing function addExclamation", () => {
  it("function addExclamation is of type function", () => {
    expect(typeof bundle.addExclamation).to.equal("function");
  });
  it("invocation of addExclamation('tacos') to equal 'tacos!'", () => {
    cy.wrap({ addExclamation: bundle.addExclamation })
      .invoke("addExclamation", "tacos")
      .should("equal", "tacos!");
  });
});

describe("testing function whatsUp", () => {
  it("function whatsUp is of type function", () => {
    expect(typeof bundle.whatsUp).to.equal("function");
  });
  it("the invocation of whatsUp('doc) to equal 'Whats up doc?'", () => {
    cy.wrap({ whatsUp: bundle.whatsUp })
      .invoke("whatsUp", "doc")
      .should("equal", "Whats up doc?");
  });
});

describe("testing function addTwoNums", () => {
  it("function addTwoNums is of type function", () => {
    expect(typeof bundle.addTwoNums).to.equal("function");
  });
  it("the invocation of addTwoNums(3, 4) to equal the string '3 plus 4 equals 7'", () => {
    cy.wrap({ addTwoNums: bundle.addTwoNums })
      .invoke("addTwoNums", 3, 4)
      .should("equal", "3 plus 4 equals 7");
  });
});

describe("testing function lastLetter", () => {
  it("function lastLetter is of type function ", () => {
    expect(typeof bundle.lastLetter).to.equal("function");
  });
  it("the invocation of lastLetter('AVOCADOS') to equal 'S'", () => {
    cy.wrap({ lastLetter: bundle.lastLetter })
      .invoke("lastLetter", "AVOCADOS")
      .should("equal", "S");
  });
});

describe("testing function sunglasses", () => {
  it("function sunglasses is of type function", () => {
    expect(typeof bundle.sunglasses).to.equal("function");
  });
  it("the invocation of sunglasses('night') to equal 'I wear my sunglasses at night'", () => {
    cy.wrap({ sunglasses: bundle.sunglasses })
      .invoke("sunglasses", "night")
      .should("equal", "I wear my sunglasses at night");
  });
  it("testing the conversion of function sunglasses to ES6 syntax", () => {
    expect(bundle.sunglasses.toString()).to.not.include("function");
  });
});
