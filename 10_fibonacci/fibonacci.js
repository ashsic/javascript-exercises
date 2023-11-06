const fibonacci = function(num) {
    if (num < 0)
        return "OOPS";
    const fibNums = [0, 1];
    for (let i=1;i<=num;i++){
        fibNums.push(fibNums[fibNums.length - 1] + fibNums[fibNums.length - 2]);
    };
    return fibNums[num];
};

// Do not edit below this line
module.exports = fibonacci;
