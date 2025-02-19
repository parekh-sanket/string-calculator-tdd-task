export class StringCalculator{
    add(number: string): number {
        if(number == "") return 0;

        if(!number.includes(",")){
            return parseInt(number)
        }

        let numberArray = number.split(',')
        let sum = numberArray.reduce((accSum : number, currNumber: string): number=>{
            accSum += parseInt(currNumber)
            return accSum
        },0);

        return sum;
    }
} 