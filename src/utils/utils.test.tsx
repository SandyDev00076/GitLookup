import { cJoin } from "utils";

it("should provide correct class string", () => {
  expect(cJoin("a", "b", "c")).toBe("a b c");
});

it("should provide correct class string with undefined entries", () => {
  expect(cJoin("a", undefined, "c")).toBe("a c");
});
