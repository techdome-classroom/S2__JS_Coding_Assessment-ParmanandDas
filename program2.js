/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    
};


module.exports={romanToInt}

function romanToInt(s) {
    // Create a mapping of Roman numerals to their integer values
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;
    
    // Loop through the string s
    for (let i = 0; i < s.length; i++) {
        // If the current numeral is smaller than the next, subtract it
        if (i < s.length - 1 && romanMap[s[i]] < romanMap[s[i + 1]]) {
            total -= romanMap[s[i]];
        } else {
            // Otherwise, add the value
            total += romanMap[s[i]];
        }
    }

    return total;
}

// Example usage:
console.log(romanToInt("III"));      // Output: 3
console.log(romanToInt("LVIII"));    // Output: 58
console.log(romanToInt("MCMXCIV"));  // Output: 1994