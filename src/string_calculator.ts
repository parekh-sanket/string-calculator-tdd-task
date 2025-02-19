export class StringCalculator{
    add(numbers: string): number {
        if(numbers == "") return 0;

        if(!numbers.includes(",") && !numbers.startsWith("//")){
            return parseInt(numbers)
        }

        let delimiter = ",", numbersStr = numbers

        if(numbers.startsWith("//")){
            const firstNewLine = numbers.indexOf("\n");
            delimiter = numbers.substring(2, firstNewLine);
            numbersStr = numbers.substring(firstNewLine + 1);
        }
        
        let normalizedNumbers = numbersStr.replace(/\n/g, delimiter); 
        let numbersArray = normalizedNumbers.split(delimiter).map(num => parseInt(num))
        const negativeNumbers = numbersArray.filter((n) => n < 0);

        if(negativeNumbers.length){
            throw new Error(`negatives not allowed: ${negativeNumbers.join(',')}`);
        }
        
        let sum = numbersArray.reduce((accSum, currNumbers): number => accSum + currNumbers,0);

        return sum;
    }
} 