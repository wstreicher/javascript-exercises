const removeFromArray = function(array, ...args) {
    // for (let i = 1; i <= (arguments.length - 1); i++) {
    //     for (let a = 0; a <= array.length; a++) {
    //         if (array.indexOf(arguments[i] != undefined)) {
    //             array.splice(array.indexOf(arguments[i]))
    //         }
    //     }
    // }

    const newArray = [];

    array.forEach((item) => {
        if (!args.includes(item)) {
            newArray.push(item);
        }
    });

    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
