import { StringCalculator } from "./string_calculator";

describe("String Calculator Testing", () => {
  let calculator: StringCalculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });
  
  it("should return 0 for empty string", () => {
    expect(calculator.add("")).toBe(0);
  });
});
