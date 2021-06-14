import { bundle } from "../../../Functions_Execution_Context/Part_Two_Functions";

describe("testing functions func1 and func2", () => {
  it("testing the adding of argument to function func1 to equal true", () => {
    expect(bundle.one).to.equal(true);
  });
  it("testing the adding of argument to function func2 to equal true", () => {
    expect(bundle.two).to.equal(true);
  });
});

describe("testing functions bears, beets, battlestar and galactica", () => {
  it("bears is of type function", () => {
    expect(typeof bundle.bears).to.equal("function");
  });
  it("testing the assignment of function bears to variable dwight", () => {
    expect(bundle.dwight).to.equal("BearsBeetsBattlestarGalactica");
  });
  it("testing the invocation function bears to equal 'BearsBeetsBattlestarGalactica'", () => {
    cy.wrap({ bears: bundle.bears })
      .invoke("bears", "")
      .should("equal", "BearsBeetsBattlestarGalactica");
  });
});

describe("testing function orderFood", () => {
  it("orderFood is of type function", () => {
    expect(typeof bundle.orderFood).to.equal("function");
  });
  it("testing the invocation of function orderFood to equal the invocation of function callRestaurant", () => {
    cy.wrap({ orderFood: bundle.orderFood })
      .invoke("orderFood", "Thai")
      .should("equal", bundle.callRestaurant(bundle.restaurantOpen, "Thai"));
  });
});

describe("testing function callRestaurant", () => {
  it("callRestaurant is of type function", () => {
    expect(typeof bundle.callRestaurant).to.equal("function");
  });
  it("the invocation of function callRestaurant to equal 'Lets order (food)' or 'Restaurant is closed'", () => {
    cy.wrap({ callRestaurant: bundle.callRestaurant })
      .invoke("callRestaurant", true, "Thai")
      .should("equal", "Lets order Thai");
    cy.wrap({ callRestaurant: bundle.callRestaurant })
      .invoke("callRestaurant", false, "Thai")
      .should("equal", "Restaurant is closed");
  });
});

describe("testing the function isEven", () => {
  it("isEven is of type function", () => {
    expect(typeof bundle.isEven).to.equal("function");
  });
  it("the invocation of function isEven to equal boolean", () => {
    cy.wrap({ isEven: bundle.isEven })
      .invoke("isEven", 5)
      .should("equal", false);
    cy.wrap({ isEven: bundle.isEven })
      .invoke("isEven", 6)
      .should("equal", true);
  });
});

describe("testing function findRemainder", () => {
  it("findRemainder is of type function", () => {
    expect(typeof bundle.findRemainder).to.equal("function");
  });
  it("the invocation of findRemainder to equal the remainder of two numbers", () => {
    cy.wrap({ findRemainder: bundle.findRemainder })
      .invoke("findRemainder", 100, 13)
      .should("equal", 9);
    cy.wrap({ findRemainder: bundle.findRemainder })
      .invoke("findRemainder", 4, 66)
      .should("equal", 2);
  });
});
