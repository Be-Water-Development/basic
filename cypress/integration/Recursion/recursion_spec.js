import { bundle } from "../../../Recursion/recursion";

describe("testing function repeatMe", () => {
  it("repeatMe is of type function", () => {
    expect(typeof bundle.repeatMe).to.equal("function");
  });
  it("the invocation of repeatMe should return a character repeated 6 times", () => {
    cy.wrap({ repeatMe: bundle.repeatMe })
      .invoke("repeatMe", "y")
      .should("equal", "yyyyyy");
    cy.wrap({ repeatMe: bundle.repeatMe })
      .invoke("repeatMe", "z")
      .should("equal", "zzzzzz");
  });
});

describe("testing function sumME", () => {
  it("sumMe is of type function", () => {
    expect(typeof bundle.sumMe).to.equal("function");
  });
  it("the invocation of sumMe should return the sum of all array elements", () => {
    cy.wrap({ sumMe: bundle.sumMe })
      .invoke("sumMe", [1, 2, 3, 4, 5, 6])
      .should("equal", 21);
  });
});

describe("testing function factorial", () => {
  it("factorial is of type function", () => {
    expect(typeof bundle.factorial).to.equal("function");
  });
  it("the invocation of factorial should return the factorial of a number", () => {
    cy.wrap({ factorial: bundle.factorial })
      .invoke("factorial", 5)
      .should("equal", 120);
    cy.wrap({ factorial: bundle.factorial })
      .invoke("factorial", 0)
      .should("equal", 1);
  });
});

describe("testing function getLength", () => {
  it("getLength is of type function", () => {
    expect(typeof bundle.getLength).to.equal("function");
  });
  it("the invocation of get length should return the length of the array", () => {
    cy.wrap({ getLength: bundle.getLength })
      .invoke("getLength", [])
      .should("equal", 0);
    cy.wrap({ getLength: bundle.getLength })
      .invoke("getLength", [1, 2])
      .should("equal", 2);
    cy.wrap({ getLength: bundle.getLength })
      .invoke("getLength", [1, 2, 3])
      .should("equal", 3);
  });
});

describe("testing function powerOf", () => {
  it("powerOf is of type function", () => {
    expect(typeof bundle.powerOf).to.equal("function");
  });
  it("the invocation of powerOf should return the base to the power of the exponent", () => {
    cy.wrap({ powerOf: bundle.powerOf })
      .invoke("powerOf", 3, 3)
      .should("equal", 27);
    cy.wrap({ powerOf: bundle.powerOf })
      .invoke("powerOf", 4, 6)
      .should("equal", 4096);
  });
});

describe("testing function pass", () => {
  it("pass is of type function", () => {
    expect(typeof bundle.pass).to.equal("function");
  });
  it("the invocation of pass should return a number", () => {
    cy.wrap({ pass: bundle.pass })
      .invoke("pass", 3, bundle.funcArray)
      .should("equal", 10);
  });
});
