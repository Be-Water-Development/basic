import { bundle } from "../../../Functions_Execution_Context/Part_One_Functions";

describe("Part one functions testing", () => {
  it("testing function addTen is of type function and the invocation of addTen(5) is equal to 15", () => {
    expect(typeof bundle.addTen).to.equal("function");
    expect(bundle.addTen(5)).to.equal(15);
  });
  it("testing function addExclamation is of type function and the invocation of addExclamation('tacos') to equal 'tacos!'", () => {
    expect(typeof bundle.addExclamation).to.equal("function");
    expect(bundle.addExclamation("tacos")).to.equal("tacos!");
  });
  it("testing function whatsUp is of type function and the invocation of whatsUp('doc) to equal 'Whats up doc?'", () => {
    expect(typeof bundle.whatsUp).to.equal("function");
    expect(bundle.whatsUp("doc")).to.equal("Whats up doc?");
  });
  it("testing function addTwoNums is of type functions and the invocation of addTwoNums(3, 4) to equal the string '3 plus 4 equals 7'", () => {
    expect(typeof bundle.addTwoNums).to.equal("function");
    expect(bundle.addTwoNums(3, 4)).to.equal("3 plus 4 equals 7");
  });
  it("testing function lastLetter is of type function and the invocation of lastLetter('AVOCADOS') to equal 'S'", () => {
    expect(typeof bundle.lastLetter).to.equal("function");
    expect(bundle.lastLetter("AVOCADOS")).to.equal("S");
  });
});
