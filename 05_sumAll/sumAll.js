const sumAll = function(num1, num2) {
    if ((num1 < 0) || (num2 < 0)) {
        return "ERROR"
    } else if (((typeof num1 == "number") && (typeof num2 == "number"))) {
        let sum;
        if (num1 >= num2) {
            sum = num2;
            for (let i = (num2 + 1); i <= num1; i++) {
                sum += i
            }
        } else {
            sum = num1;
            for (let i = (num1 + 1); i <= num2; i++) {
                sum += i
            } 
        }

        return sum;
} else {
    return "ERROR"
}
}


// Do not edit below this line
module.exports = sumAll;
