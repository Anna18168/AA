let obj1= {
    a:1,
    b:2,
};

let obj2= {
    a:1,
    b:2,
};
let obj3= {
    a:3,
    b:4,
};

const isObj = (firstObj, secondObj) => {
    const firstObjKeys = Object.keys(firstObj);
    const secondObjKeys = Object.keys(secondObj);

    if (firstObjKeys.length !== secondObjKeys.length) {
        return false;
    }

    for (const key in firstObj) {    //Аналог Object.keys();
        if (firstObj[key] !== secondObj[key]) {
            return false;
        }
    }
    return true;
}
console.log(isObj(obj1 , obj2));

// Аналог Object.values();

let obj= {
    a:1,
    b:2,
};
let x = 0;
 for (let key in obj) {
    x = obj[key];
    
 }
console.log(x)





function Animal (aObj){
     Object.assign(this,aObj );
}

 const cat = new Animal({
     name: 'cat',
     location: 'Ukrain',
      food: 'fish',
 });

const dog = new Animal({
    name: 'dog',
    location: 'Germany',
    food: 'meet',
});

const fish = new Animal({
    name: 'fish',
    location: 'Spain',
    food: 'seaweed',
});
const zoo = [cat, dog, fish];
const filtered = zoo.filter( (animal) =>{
    return animal.location === 'Spain';
})

console.log(zoo);
console.log(filtered);
