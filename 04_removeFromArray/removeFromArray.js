const removeFromArray = function(array, num) {
    let args = Array.from(arguments);
    let i = 1;
    while (i < args.length){
        if (args[0].includes(args[i])){
            args[0].splice(args[0].indexOf(args[i]), 1);
        }
        i++;
        }
    return args[0];
};

// Do not edit below this line
module.exports = removeFromArray;
