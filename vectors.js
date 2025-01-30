const vector = Array();

vector.push(10, 20, 30);

console.log(vector);

for (let a of vector)   {
    console.log(a);
}

let sum = 0;

for (let count = 0; count < vector.length; count++) {
    sum += vector[count];
}

console.log(sum);