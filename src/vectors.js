const vector = [10, 20, 31];

console.log(vector);

for (let a of vector)   {
    console.log(a);
}

let sum = 0;

for (let count = 0; count < vector.length; count++) {
    sum += vector[count];
}

console.log(sum);

let verifier;
let divider;

if (sum <= 1)   {
    verifier = false;
}   else    {
    verifier = true;
    divider = 2;

    while (divider < sum && verifier)   {
        if (sum % divider === 0)    {
            verifier = false;
        }   else    {
            divider++;
        }
    }
}

console.log(verifier);