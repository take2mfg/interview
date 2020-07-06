import { countDown } from "../questions/008";

describe("countDown", () => {
  it("should count down from 9", () => {
    expect(countDown(9)).toEqual("9 8 7 6 5 4 3 2 1 ");
  });
});
