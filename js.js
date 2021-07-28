let arr = [1, 2, 3, 4, 5];

console.log(arr)
console.log(arr.slice(0,3));
let arr2 = arr.slice(0,3);
console.log(arr2)


console.log(arr.slice(3,5));
let arr3 = arr.slice(3,5);
console.log(arr3)




const num ='1 1 2 4 4 5 6 7 1 2 4 5 3';
let arr4 = num.split(' ');
console.log(arr4)

function spliceNum(numm,symbol){
 let a= "";
 for (let i=0; i < numm.length; i++){
  if (numm[i]%2 !== 0 && i < numm.length-1){
   a += numm[i] + symbol;
  }
  else {
   a += numm[i];
  }
 }
 console.log(a);
 }

spliceNum(arr4, '-')


const arr5 = [1,2,3,4,5,6,7,8];
const arr6 = ['Roma', 'Sasha', 'Vlad', 'Oleg'];
const wrongLengthArr = [1,2,3];

function changeHalf(arr7){
 let c =[];
 if(arr7.length%2 === 0 && (arr7.length)/2) {
  c = arr7.splice((arr7.length)/2);
  console.log(c);

  let b = c.concat(arr7);
  console.log(b);
 }
  else if (arr7.length%2 !== 0){
   console.log(" Нечетная длина массива")
  }


}
changeHalf(arr5)
changeHalf(arr6)
changeHalf(wrongLengthArr)
