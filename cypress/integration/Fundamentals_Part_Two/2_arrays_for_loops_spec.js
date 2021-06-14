import { bundle } from "../../../Fundamentals_Part_Two/2_arrays_for_loops";

describe("Arrays for loops testing", () => {
  it("testing the incrementing of variable countToTen to 10 with a for loop", () => {
    expect(bundle.countToTen).to.equal(10);
  });
  it("testing the iteration of the nums array with a for loop, multiplying each element by 11", () => {
    expect(bundle.nums).to.eql([11, 22, 33, 44, 55, 66]);
  });
  it("testing the iteration of weather array while pushing a concatenated string into weatherUpdate array", () => {
    expect(bundle.weatherUpdate).to.eql([
      "It is raining outside",
      "It is sunny outside",
      "It is stormy outside",
      "It is hailing outside",
    ]);
  });
  it("testing the iteration of an array while pushing a concatenated string into nationalParks array", () => {
    expect(bundle.nationalParks).to.eql([
      "Glacier National Park is in Montana and attractions are 700 miles of hiking trails",
      "Yellowstone National Park is in Wyoming and attractions are hot springs and geysers",
      "Yosemite National Park is in California and attractions are El Capitan and Half Dome",
    ]);
  });
});
