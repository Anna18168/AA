class Vector{
    constructor(size, [x,y,z]) {
        this.size = size;
        [this.x = x, this.y = y, this.z =z];
    }

    addition (number){
    let vector = [this.x + number.x,this.y + number.y, this.z + number.z];
    let vecsize = this.size + number.size;
    return new Vector(vecsize, vector)
    }

    subtraction(number){
        let vector = [this.x - number.x,this.y - number.y, this.z - number.z];
        let vecsize = this.size - number.size;
        return new Vector(vecsize, vector)
    }

    multiplicationByNumber(number){
        let vector = [this.x * number,this.y * number, this.z * number];
        let vecsize = this.size * number;
        return new Vector(vecsize, vector)
    }
    scalarProduct(number){
        let scalarProduct=[this.x * number.x, this.y * number.y,this.z * number.z];
        return scalarProduct
    }

}

let vector1 = new Vector(4, [3,6,9])

let vector2 = new Vector(3, [2,4,6])

console.log(vector1.addition(vector2));
console.log(vector1.subtraction(vector2));
console.log(vector1.multiplicationByNumber(4));
console.log(vector1.scalarProduct(vector2));
