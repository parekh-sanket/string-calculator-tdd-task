export class StringCalculator{
    add(numbers: string): number {
        if(numbers == "") return 0;

        if(!numbers.includes(",")){
            return parseInt(numbers)
        }

        let normalizedNumbers = numbers.replace(/\n/g, ","); 
        let numbersArray = normalizedNumbers.split(',')
        let sum = numbersArray.reduce((accSum : number, currNumbers: string): number=>{
            accSum += parseInt(currNumbers)
            return accSum
        },0);

        return sum;
    }
} 