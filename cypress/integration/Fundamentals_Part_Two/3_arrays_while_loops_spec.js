import { bundle } from "../../../Fundamentals_Part_Two/3_arrays_while_loops";

describe("While loop testing", () => {
  it("testing the use of a while loop to decrement countDown to 0", () => {
    expect(bundle.countDown).to.equal(0);
  });
  it("testing the use of a while loop to sum numbers 0-14", () => {
    expect(bundle.sum).to.equal(105);
  });
});
