import { sum } from "../sum";

test("Sum function should return result ", () => {
  const result = sum(51, -44);
  expect(result).toBe(7);
});
