module.exports = function toReadable(number) {
    let arrayOfStr = number.toString().split("");
    let resultStr = "";
    if (number === 0) return "zero";
    while (arrayOfStr.length != 0) {
        if (arrayOfStr.length === 3) {
            resultStr += pairs.get(arrayOfStr[0])[0] + " hundred ";
            arrayOfStr.shift();
        }
        if (arrayOfStr.length === 2) {
            if (arrayOfStr[0] === "0") {
                arrayOfStr.shift();
            } else { 
                if (parseInt(arrayOfStr[0] + arrayOfStr[1]) >=10 && parseInt(arrayOfStr[0] + arrayOfStr[1]) <= 19) {
                    resultStr += pairs.get(arrayOfStr[1])[2];
                    arrayOfStr.shift();
                    arrayOfStr.shift();
                } else {
                    resultStr += pairs.get(arrayOfStr[0])[1] + " ";
                    arrayOfStr.shift();
                }
        
            }
        }
        if (arrayOfStr.length === 1) {
            if (arrayOfStr[0] != "0") resultStr += pairs.get(arrayOfStr[0])[0];
            arrayOfStr.shift();
        }
    }
        console.log(resultStr);
        return resultStr.trim();
    }



let pairs = new Map();
pairs.set("0", ["zero", "", "ten"]);
pairs.set("1", ["one", "", "eleven"]);
pairs.set("2", ["two", "twenty", "twelve"]);
pairs.set("3", ["three", "thirty", "thirteen"]);
pairs.set("4", ["four", "forty", "fourteen"]);
pairs.set("5", ["five", "fifty", "fifteen"]);
pairs.set("6", ["six", "sixty", "sixteen"]);
pairs.set("7", ["seven", "seventy","seventeen"]);
pairs.set("8", ["eight", "eighty", "eighteen"]);
pairs.set("9", ["nine", "ninety", "nineteen"]);
pairs.set("10", "ten");
pairs.set("11", "eleven");
pairs.set("12", "twelve");
pairs.set("13", "thirteen");
pairs.set("14", "fourteen");
pairs.set("15", "fifteen");
pairs.set("16", "sixteen");
pairs.set("17", "seventeen");
pairs.set("18", "eighteen");
pairs.set("19", "nineteen");
