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
            let delimiterSection = numbers.substring(2, firstNewLine);
            let delimiters = [","];

            if (delimiterSection.includes("[")) {
                delimiters = delimiterSection
                    .split(/[\[\]]/)
                    .filter((d) => d.length > 0);
            } else {
                delimiters = [delimiterSection];
            }
            
            numbersStr = numbers.substring(firstNewLine + 1);

            delimiters.forEach((d) => {
                numbersStr = numbersStr.split(d).join(",");
            });
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