import { bundle } from "../../../Closures/closures_part_two";

describe("testing function pause", () => {
  it("pause is of type function", () => {
    expect(typeof bundle.pause).to.equal("function");
  });
  // Unsure on how to test this one
  it("the invocation of pauseFunc logs a number after specified wait time has passed", () => {
    // cy.spy(window.console, "log").as("consoleLog");
    cy.wrap({ pauseFunc: bundle.pauseFunc }).invoke("pauseFunc").should("");

    // .invoke("pauseFunc")
    // .then(() => {
    //   cy.wait(2000);
    //   expect(bundle.count).to.equal(1);
    // });

    // cy.get("@consoleLog").should("be.calledWith", "1");
  });
});

describe("testing function passCode", () => {
  it("passCode is of type function", () => {
    expect(typeof bundle.passCode).to.equal("function");
  });
  it("the invocation of passCode equals a number until password string is passed in", () => {
    cy.wrap({ timesElevenAndLog: bundle.timesElevenAndLog })
      .invoke("timesElevenAndLog", 2)
      .should("equal", 22);
    cy.wrap({ timesElevenAndLog: bundle.timesElevenAndLog })
      .invoke("timesElevenAndLog", 3)
      .should("equal", 33);
    cy.wrap({ timesElevenAndLog: bundle.timesElevenAndLog })
      .invoke("timesElevenAndLog", "123")
      .should("deep.equal", { 2: 22, 3: 33 });
  });
});

describe("testing function seasonCycle", () => {
  it("seasonCycle is of type function", () => {
    expect(typeof bundle.seasonCycle).to.equal("function");
  });
  it("the invocation of function getSeason equals a cycle of seasons that correspond to the number of invocations", () => {
    cy.wrap({ getSeason: bundle.getSeason })
      .invoke("getSeason")
      .should("equal", "spring");
    cy.wrap({ getSeason: bundle.getSeason })
      .invoke("getSeason")
      .should("equal", "summer");
    cy.wrap({ getSeason: bundle.getSeason })
      .invoke("getSeason")
      .should("equal", "fall");
    cy.wrap({ getSeason: bundle.getSeason })
      .invoke("getSeason")
      .should("equal", "winter");
    cy.wrap({ getSeason: bundle.getSeason })
      .invoke("getSeason")
      .should("equal", "spring");
  });
  it("function getSeason should work for cycles of different lengths", () => {
    const days = ["monday", "tuesday", "wednesday"];
    const getDay = bundle.seasonCycle(days);
    cy.wrap({ getDay: getDay }).invoke("getDay").should("equal", "monday");
    cy.wrap({ getDay: getDay }).invoke("getDay").should("equal", "tuesday");
    cy.wrap({ getDay: getDay }).invoke("getDay").should("equal", "wednesday");
    cy.wrap({ getDay: getDay }).invoke("getDay").should("equal", "monday");
  });
});

describe("testing function firstInput", () => {
  it("firstInput should be of type function", () => {
    expect(typeof bundle.firstInput).to.equal("function");
  });
  it("the invocation of addToTen should equal a number", () => {
    cy.wrap({ addToTen: bundle.addToTen })
      .invoke("addToTen", 5, 4)
      .should("equal", 15);
  });
});

describe("testing function currentDate", () => {
  const d = new Date();
  const date = d.toDateString();
  it("currentDate is of type function", () => {
    expect(typeof bundle.currentDate).to.equal("function");
  });
  it("the invocation of plusTen should equal an object", () => {
    cy.wrap({ plusTen: bundle.plusTen })
      .invoke("plusTen", 2)
      .should("deep.equal", { date: date, output: 12 });
  });
});

describe("testing function replaceMe", () => {
  it("replaceMe is of type function", () => {
    expect(typeof bundle.replaceMe).to.equal("function");
  });
  it("the invocation of swapMe should equal a string with designated words replaced", () => {
    cy.wrap({ swapMe: bundle.swapMe })
      .invoke("swapMe", "star", "closure")
      .should("equal", undefined);
    cy.wrap({ swapMe: bundle.swapMe })
      .invoke("swapMe", "diamond", "variable")
      .should("equal", undefined);
    cy.wrap({ swapMe: bundle.swapMe })
      .invoke(
        "swapMe",
        "Twinkle, twinkle, little star, How I wonder what you are, Up above the world so high, Like a diamond in the sky"
      )
      .should(
        "equal",
        "Twinkle, twinkle, little closure, How I wonder what you are, Up above the world so high, Like a variable in the sky"
      );
  });
});
