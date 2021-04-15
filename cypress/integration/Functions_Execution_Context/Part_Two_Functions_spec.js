import { bundle } from "../../../Functions_Execution_Context/Part_Two_Functions";

describe("Functions part two testing", () => {
  it("testing the adding of arguments to functions func1 and func2 to obtain the value true for variables one and two", () => {
    expect(bundle.one).to.equal(true);
    expect(bundle.two).to.equal(true);
  });
  it("testing the invocation of 4 seperate functions with one function call to return the string 'BearsBeetsBattlestarGalactica'", () => {
    expect(bundle.dwight).to.equal("BearsBeetsBattlestarGalactica");
    cy.wrap({ bears: bundle.bears })
      .invoke("bears", "")
      .should("equal", "BearsBeetsBattlestarGalactica");
  });
  it("testing the invocation of function orderFood to return the invocation of function callRestaurant", () => {
    cy.wrap({ orderFood: bundle.orderFood })
      .invoke("orderFood", "Thai")
      .should("equal", bundle.callRestaurant(bundle.restaurantOpen, "Thai"));
  });
  it("testing the invocation of function callRestaurant to return either 'Lets order (food)' or 'Restaurant is closed' based on boolean value", () => {
    cy.wrap({ callRestaurant: bundle.callRestaurant })
      .invoke("callRestaurant", true, "Thai")
      .should("equal", "Lets order Thai");
    cy.wrap({ callRestaurant: bundle.callRestaurant })
      .invoke("callRestaurant", false, "Thai")
      .should("equal", "Restaurant is closed");
  });
  it("testing the invocation of function isEven to determine if a number is even or odd, returning boolean true or false", () => {
    expect(typeof bundle.isEven).to.equal("function");
    cy.wrap({ isEven: bundle.isEven })
      .invoke("isEven", 5)
      .should("equal", false);
    cy.wrap({ isEven: bundle.isEven })
      .invoke("isEven", 6)
      .should("equal", true);
  });
  it("testing the invocation of findRemainder to determine the remainder of two numbers", () => {
    expect(typeof bundle.findRemainder).to.equal("function");
    cy.wrap({ findRemainder: bundle.findRemainder })
      .invoke("findRemainder", 100, 13)
      .should("equal", 9);
    cy.wrap({ findRemainder: bundle.findRemainder })
      .invoke("findRemainder", 4, 66)
      .should("equal", 2);
  });
});
