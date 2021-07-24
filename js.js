function decada(day){
    if (day > 0 && day < 11) {
        console.log('first');
    }
    else if(day > 10 && day < 20) {
        console.log('second');
    }
    else  {
        console.log('third');
    }

}
decada(24);


let a = function (month){
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
}
a(5);


let part =(min) =>{

    if (min > -1 && min < 16) {
        console.log('first');
    }
    else if(min > 15 && min < 31) {
        console.log('second');
    }
    else if(min > 30 && min < 46)  {
        console.log('third');
    }
    else  {
        console.log('fourth');
    }
}
part(35)


function checkAge(age) {
    console.log((age > 18) ? 'true' : 'false')
}
checkAge('19')


// Сумма чисел от 0 до 100
let c=0;
for (let i=0; i<=100; i++){
  c += i;
}
console.log(c);

let b = 0;
let i = 0;
while (i<=100){
    b += i;
    i++;
}
console.log(b);


let d = 0;
let h = 0;
do {
    d += h;
    h++;
} while (h <= 100)
console.log(d);



function product(start,end){
    let x=1;
    for( let i=start; i<= end; i++){
        if(i % 2 === 0){
            x *= i;

        }
    }
    return x;
}

console.log(product(1,6))
