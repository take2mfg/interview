import { laggyTalk } from "../questions/006";

describe("laggyTalk", () => {
  it("should talk laggily", async () => {
    const response = await laggyTalk();
    expect(response).toEqual("I... talk... slow...");
  });
});
