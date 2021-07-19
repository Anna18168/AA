let day = Math.floor(Math.random() * 30) + 1; // числа от 1 до 31

if (day > 0 && day < 11) {
    console.log('first');
}
else if(day > 10 && day < 20) {
    console.log('second');
}
else  {
    console.log('third');
}




let month = Math.floor(Math.random() * 11) + 1; // числа от 1 до 12

const condition = month === 1|| month === 2 || month === 12;

if (condition) {
    console.log('winter');
}
else if(month >2 && month < 6) {
    console.log('spring');
}
else if(month > 5 && month >9)  {
    console.log('summer');
}
else  {
    console.log('autum');
}


let min = Math.floor(Math.random() * 59) ; // числа от 0 до 59

if (min > -1 && min < 16) {
    console.log('first');
}
else if(min > 15 && min < 31) {
    console.log('second');
}
else if(min > 30 && min > 46)  {
    console.log('third');
}
else  {
    console.log('fourth');
}

let age = 9;

// age < 18 ?  console.log('child')  : console.log('adult');

console.log (age < 18 ? 'child' : 'adult');
