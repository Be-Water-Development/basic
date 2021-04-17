import { bundle } from "../../../Functions_Execution_Context/Part_Four_Functions";

describe("Functions part four testing", () => {
  it("testing the invocation of function sumMe that sums all array elements and retuns the total", () => {
    expect(typeof bundle.sumMe).to.equal("function");
    cy.wrap({ sumMe: bundle.sumMe })
      .invoke("sumMe", [1, 7, 7, 10])
      .should("equal", 25);
    cy.wrap({ sumMe: bundle.sumMe })
      .invoke("sumMe", [2, 7, 18, 22])
      .should("equal", 49);
  });
  it("testing the invocation of function multiplyMe that multiplies an unknown number of integer arguments and returns the total", () => {
    expect(typeof bundle.multiplyMe).to.equal("function");
    cy.wrap({ multiplyMe: bundle.multiplyMe })
      .invoke("multiplyMe", 1, 8, 4, 5, 6)
      .should("equal", 960);
    cy.wrap({ multiplyMe: bundle.multiplyMe })
      .invoke("multiplyMe", 10, 2, 6, 8, 9, 15, 22, 7)
      .should("equal", 19958400);
  });
  it("testing the invocation of function sumArrays that sums two arrays at corresponding indexes and returns a new array", () => {
    expect(typeof bundle.sumArrays).to.equal("function");
    cy.wrap({ sumArrays: bundle.sumArrays })
      .invoke("sumArrays", [1, 2, 3, 4], [10, 2, 7, 8])
      .should("deep.equal", [11, 4, 10, 12]);
    cy.wrap({ sumArrays: bundle.sumArrays })
      .invoke("sumArrays", [7, 2, 3, 6, 3], [1, 15, 9, 8, 7])
      .should("deep.equal", [8, 17, 12, 14, 10]);
  });
  it("testing the invocation of function sumOfElevens that returns the string 'eleven' if sum of array elements at corresponding indexes is equal to 11, otherwise returns array1 element in new array", () => {
    expect(typeof bundle.sumOfElevens).to.equal("function");
    cy.wrap({ sumOfElevens: bundle.sumOfElevens })
      .invoke("sumOfElevens", [1, 4, 3, 5, 3, 2], [2, 7, 2, 6, 2, 3])
      .should("deep.equal", [1, "eleven", 3, "eleven", 3, 2]);
    cy.wrap({ sumOfElevens: bundle.sumOfElevens })
      .invoke("sumOfElevens", [2, 3, 5, 10, 2, 0], [9, 4, 5, 6, 2, 11])
      .should("deep.equal", ["eleven", 3, 5, 10, 2, "eleven"]);
  });
  it("testing the invocation of function countFromTen that utilizes a while loop to count down from 10 to 0, pushing strings of numbers at interals 7, 3, and 0", () => {
    expect(typeof bundle.countFromTen).to.equal("function");
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
  it("testing the invocation of function pickANumber and if statements to determine the input closest to a randomly generated number", () => {
    expect(bundle.pickANumber(22, 63)).to.satisfy(
      () => "Player 1 wins" || "Player 2 wins"
    );
  });
  it("testing the invocation of function findTheRange to return the low, high and range of an array of numbers", () => {
    expect(typeof bundle.findTheRange).to.equal("function");
    cy.wrap({ findTheRange: bundle.findTheRange })
      .invoke("findTheRange", [7, 18, 3, 5, 9, 10])
      .should("deep.equal", [3, 18, 15]);
  });
});
