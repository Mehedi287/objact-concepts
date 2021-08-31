const a = { a: 45, b: 5 };
const b = { a: 45, b: 5 };
//objact ka sorasori compare korea jai nah because they are nonprimitice 
if (a === b) {
    console.log('they are equale');
}
else {
    console.log('they are not equale');
}
//objact ka string a convert korea compare kore jai 
const str = JSON.stringify(a);
console.log(str);
const str2 = JSON.stringify(b);
if (str === str2) {
    console.log('true');
}
else {
    console.log('false');
}
// we can compare tow objace by there keys and values 
const obj1 = { nsme: 'hasd', id: 98 }
const obj2 = { age: 876, id: 90 };
function compare(a, b) {
    if (Object.values(a).length === Object.values(b).length) {
        console.log('ther are same values ');
    }
    else {
        console.log('they are not same keys ');
    }
}
compare(obj1, obj2)