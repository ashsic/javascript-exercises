const palindromes = function (s) {
    s = s.toLowerCase();
    let arr = s.split("");
    s = "";
    for (const i of arr){
        let iCode = i.charCodeAt();
        if ((65 <= iCode && iCode <= 90) || (97 <= iCode && iCode <= 122) || (48 <= iCode && iCode <= 57)) {
            s += i;
        }
    }
    let l = 0;
    let r = s.length - 1;
    while (l <= r){
        if (s[l] != s[r])
            return false;
        l+=1;
        r-=1;
    }
    return true;
};


// Do not edit below this line
module.exports = palindromes;
