import { StringCalculator } from "./string_calculator";

describe("String Calculator Testing", () => {
  let calculator: StringCalculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });
  
  it("should return 0 for empty string", () => {
    expect(calculator.add("")).toBe(0);
  });

  it("should return number if only one number give in string" , ()=>{
    expect(calculator.add("1")).toBe(1);
  })
});
