var string = "Herbert G. Wells";
console.log(string);
let fname = "";
let mname = "";
let lname = "";
let scount = 0;
let period = 0;
let e = "";
for (let i = 0; i < string.length; i++) {
    if (string[i] === ".") {
        period += 1;
    }
    if (string[i] === " ") {
        scount += 1;
    }
    if (scount === 0) {
        fname += string[i];
    } 
    else if (scount === 1) {
        if (string[i] !== " ") {
            mname += string[i];
        }
    } 
    else if (scount === 2) {
        if (string[i] !== " ") {
            lname += string[i];
        }
    }
}
if (string[string.length - 1] === ".") {
    period -= 1;
}

let fnameRegex = /^[A-Z][a-zA-Z]+$|^[A-Z]\W$/g;
let a = fnameRegex.test(fname);
let mnameRegex = /^[A-Z][a-zA-Z]+$|^[A-Z]\W$/g;
let b = mnameRegex.test(mname);
let lnameRegex = /^[A-Z][a-zA-Z]+$/g;
let c = lnameRegex.test(lname);


if (a === true && b === true && c === true && scount === 2 &&
    (period === 0 || period === 2)) {
    e = true;
} else
if (a === true && b === true && c === true && scount === 2 &&
    (mname[mname.length - 1] === ".")) {
    e = true;
} else
if (a === true && b === true && scount === 1) {
    e = true;
} else
    e = false;
let fullName = fname + " " + mname + " " + lname;
console.log(e);