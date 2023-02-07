function tripletTrue(str) {
    let previousChar = str[0];
    let currentCount = 1;

    for (let i = 1; i < str.length; i++) {
        let currentChar = str[i];

        if (currentChar === previousChar) {
            currentCount++;
            if (currentCount === 3) {
                return true;
            }
        } else {
            previousChar = currentChar;
            currentCount = 1;
        }
    }
    return false;
    // 0: have the currentcount on 1
    // 1. iterate through str.length
    // 1: see if the previousletter === currentChar
    // 2: if currentCount === 3 return true
    // 3: else previousletter === currentChar
    // 4: Count back to 1

}



console.log(tripletTrue('caaabb'));        // true
console.log(tripletTrue('terrrrrible'));   // true
console.log(tripletTrue('runninggg'));     // true
console.log(tripletTrue('bootcamp'));      // false
console.log(tripletTrue('e'));             // false
