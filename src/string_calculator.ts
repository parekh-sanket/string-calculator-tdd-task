export class StringCalculator{
    add(numbers: string): number {
        if(numbers == "") return 0;

        if(!numbers.includes(",") && !numbers.startsWith("//")){
            const num = parseInt(numbers);
            if (num < 0) {
                throw new Error(`negatives not allowed: ${num}`);
            }
            return num;
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
        
        let sum = numbersArray.filter(num => num < 1000).reduce((accSum, currNumbers): number => accSum + currNumbers,0);

        return sum;
    }
} 