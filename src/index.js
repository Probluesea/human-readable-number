module.exports = function toReadable(number) {
    // Convert number to array
    const numbers = Math.abs(number)
        .toString()
        .split("")
        .map(function (n) {
            return Number(n);
        });

    // Dictionaries
    const dictionary = [
        [
            "eleven",
            "twelve",
            "thirteen",
            "fourteen",
            "fifteen",
            "sixteen",
            "seventeen",
            "eighteen",
            "nineteen",
        ], // 11 - 19
        [
            "zero",
            "one",
            "two",
            "three",
            "four",
            "five",
            "six",
            "seven",
            "eight",
            "nine",
        ], // 0 - 9
        [
            "ten",
            "twenty",
            "thirty",
            "forty",
            "fifty",
            "sixty",
            "seventy",
            "eighty",
            "ninety",
        ], // 10, 20, 30 ... etc.
        ["hundred"], // 100
    ];

    const arrLength = numbers.length;

    // Conditions
    if (arrLength <= 1) {
        return dictionary[arrLength][numbers[0]];
    } else if (arrLength <= 2) {
        if (numbers[1] === 0) {
            return dictionary[arrLength][numbers[0] - 1];
        } else if (numbers[0] <= 1 && numbers[1] <= 19) {
            return dictionary[0][numbers[1] - 1];
        } else {
            return `${dictionary[arrLength][numbers[0] - 1]} ${
                dictionary[arrLength - 1][numbers[1]]
            }`;
        }
    } else if (arrLength <= 3) {
        if (numbers[1] === 0 && numbers[2] === 0) {
            return `${dictionary[arrLength - 2][numbers[0]]} ${
                dictionary[arrLength][0]
            }`;
        } else if (numbers[1] === 0 && numbers[2] >= 1 && numbers[2] <= 9) {
            return `${dictionary[arrLength - 2][numbers[0]]} ${
                dictionary[arrLength][0]
            } ${dictionary[arrLength - 2][numbers[2]]}`;
        } else if (numbers[1] >= 1 && numbers[2] === 0) {
            return `${dictionary[arrLength - 2][numbers[0]]} ${
                dictionary[arrLength][0]
            } ${dictionary[arrLength - 1][numbers[1] - 1]}`;
        } else if (numbers[1] <= 1 && numbers[2] <= 19) {
            return `${dictionary[arrLength - 2][numbers[0]]} ${
                dictionary[arrLength][0]
            } ${dictionary[0][numbers[2] - 1]}`;
        } else {
            return `${dictionary[arrLength - 2][numbers[0]]} ${
                dictionary[arrLength][0]
            } ${dictionary[arrLength - 1][numbers[1] - 1]} ${
                dictionary[arrLength - 2][numbers[2]]
            }`;
        }
    }
};
