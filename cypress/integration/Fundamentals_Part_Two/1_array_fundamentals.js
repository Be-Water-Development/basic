import { bundle } from "../../../Fundamentals_Part_Two/1_array_fundamentals";

describe("Array fundamentals testing", () => {
  it("Testing the creating of the cities array", () => {
    expect(Array.isArray(bundle.cities)).to.equal(true);
  });
  it("Testing the reassignment of value at index 2 of cities array to equal 'San Francisco'", () => {
    expect(bundle.cities[2]).to.equal("San Francisco");
    expect(bundle.cities).to.eql([
      "Portland",
      "Seattle",
      "San Francisco",
      "Reno",
      "Bend",
    ]);
  });
  it("Testing the creating of the citiesLength varaible to equal 5", () => {
    expect(bundle.citiesLength).to.equal(5);
  });
  it("Testing the use of the push method on nums array to add value 7", () => {
    expect(bundle.nums).to.eql([1, 2, 3, 4, 5, 6, 7]);
  });
  it("Testing the use of the pop method to remove value 55 from moreNums array", () => {
    expect(bundle.moreNums).to.eql([11, 22, 33, 44]);
  });
});
