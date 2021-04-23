import { bundle } from "../../../Functions_Execution_Context/Part_Four_Functions";

describe("testing function sumMe", () => {
  it("sumMe is of type function", () => {
    expect(typeof bundle.sumMe).to.equal("function");
  });
  it("the invocation of function sumMe to equal the sum of all array elements", () => {
    cy.wrap({ sumMe: bundle.sumMe })
      .invoke("sumMe", [1, 7, 7, 10])
      .should("equal", 25);
    cy.wrap({ sumMe: bundle.sumMe })
      .invoke("sumMe", [2, 7, 18, 22])
      .should("equal", 49);
  });
});

describe("testing function multiplyMe", () => {
  it("multiplyMe is of type function", () => {
    expect(typeof bundle.multiplyMe).to.equal("function");
  });
  it("the invocation of function multiplyMe to equal the total of multiplying an unknown number of integer arguments", () => {
    cy.wrap({ multiplyMe: bundle.multiplyMe })
      .invoke("multiplyMe", 1, 8, 4, 5, 6)
      .should("equal", 960);
    cy.wrap({ multiplyMe: bundle.multiplyMe })
      .invoke("multiplyMe", 10, 2, 6, 8, 9, 15, 22, 7)
      .should("equal", 19958400);
  });
});

describe("testing function sumArrays", () => {
  it("sumArrays is of type function", () => {
    expect(typeof bundle.sumArrays).to.equal("function");
  });
  it("the invocation of function sumArrays to equal an array of sums at corresponding indexes", () => {
    cy.wrap({ sumArrays: bundle.sumArrays })
      .invoke("sumArrays", [1, 2, 3, 4], [10, 2, 7, 8])
      .should("deep.equal", [11, 4, 10, 12]);
    cy.wrap({ sumArrays: bundle.sumArrays })
      .invoke("sumArrays", [7, 2, 3, 6, 3], [1, 15, 9, 8, 7])
      .should("deep.equal", [8, 17, 12, 14, 10]);
  });
});

describe("testing function sumOfElevens", () => {
  it("sumOfElevens is of type function", () => {
    expect(typeof bundle.sumOfElevens).to.equal("function");
  });
  it("the invocation of function sumOfElevens to equal an array with string 'eleven' at appropriate indexes", () => {
    cy.wrap({ sumOfElevens: bundle.sumOfElevens })
      .invoke("sumOfElevens", [1, 4, 3, 5, 3, 2], [2, 7, 2, 6, 2, 3])
      .should("deep.equal", [1, "eleven", 3, "eleven", 3, 2]);
    cy.wrap({ sumOfElevens: bundle.sumOfElevens })
      .invoke("sumOfElevens", [2, 3, 5, 10, 2, 0], [9, 4, 5, 6, 2, 11])
      .should("deep.equal", ["eleven", 3, 5, 10, 2, "eleven"]);
  });
});

describe("testing function countFromTen", () => {
  it("countFromTen is of type function", () => {
    expect(typeof bundle.countFromTen).to.equal("function");
  });
  it("the invocation of function countFromTen to equal numbers 10-0 with strings pushed at certain intervals", () => {
    cy.wrap({ countFromTen: bundle.countFromTen })
      .invoke("countFromTen", 10)
      .should("deep.equal", [
        10,
        9,
        8,
        7,
        "seven",
        6,
        5,
        4,
        3,
        "three",
        2,
        1,
        0,
        "zero",
      ]);
  });
});

describe("testing function pickANumber", () => {
  it("pickANumber is of type function", () => {
    expect(typeof bundle.pickANumber).to.equal("function");
  });
  it("the invocation of function pickANumber to equal string 'Player 1 wins' or 'Player 2 wins'", () => {
    expect(bundle.pickANumber(22, 63)).to.satisfy(
      () => "Player 1 wins" || "Player 2 wins"
    );
  });
});

describe("testing function findTheRange", () => {
  it("findTheRange is of type function", () => {
    expect(typeof bundle.findTheRange).to.equal("function");
  });
  it("the invocation of function findTheRange to equal the low, high and range of an array of numbers", () => {
    cy.wrap({ findTheRange: bundle.findTheRange })
      .invoke("findTheRange", [7, 18, 3, 5, 9, 10])
      .should("deep.equal", [3, 18, 15]);
  });
});
