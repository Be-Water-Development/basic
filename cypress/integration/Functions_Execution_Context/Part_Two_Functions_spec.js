import { bundle } from "../../../Functions_Execution_Context/Part_Two_Functions";

describe("Functions part two testing", () => {
  it("testing the adding of arguments to functions func1 and func2 to obtain the value true for variables one and two", () => {
    expect(bundle.one).to.equal(true);
    expect(bundle.two).to.equal(true);
  });
  it("testing the invocation of 4 seperate functions with one function call to return the string 'BearsBeetsBattlestarGalactica'", () => {
    expect(bundle.dwight).to.equal("BearsBeetsBattlestarGalactica");
  });
  it("testing the invocation of function orderFood to return the invocation of function callRestaurant", () => {
    expect(bundle.orderFood("Thai")).to.equal(
      bundle.callRestaurant(bundle.restaurantOpen, "Thai")
    );
  });
  it("testing the invocation of function callRestaurant to return either 'Lets order (food)' or 'Restaurant is closed' based on boolean value", () => {
    expect(bundle.callRestaurant(true, "Thai")).to.equal("Lets order Thai");
    expect(bundle.callRestaurant(false, "Thai")).to.equal(
      "Restaurant is closed"
    );
  });
  it("testing the invocation of function isEven to determine if a number is even or odd, returning boolean true or false", () => {
    expect(typeof bundle.isEven).to.equal("function");
    expect(bundle.isEven(5)).to.equal(false);
    expect(bundle.isEven(6)).to.equal(true);
  });
  it("testing the invocation of findRemainder to determine the remainder of two numbers", () => {
    expect(typeof bundle.findRemainder).to.equal("function");
    expect(bundle.findRemainder(100, 13)).to.equal(9);
    expect(bundle.findRemainder(4, 66)).to.equal(2);
  });
});
