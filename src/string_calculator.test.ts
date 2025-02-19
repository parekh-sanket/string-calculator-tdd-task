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

  it("should return sum of number when more then one number given in string" , ()=>{
    expect(calculator.add("1,2")).toBe(3);
    expect(calculator.add("1,2,3")).toBe(6);
  })

  it("should handle newline between numbers" , ()=>{
    expect(calculator.add("1\n2,3")).toBe(6);
  })

  it("should handle different delimiters" , ()=>{
    expect(calculator.add("//;\n1;2")).toBe(3)
  })
});
