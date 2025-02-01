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


function perfectSquareNumber (sum) {
    let aux;
    let result;

    if (sum === 1)  {
        return true;
    }   else    {
        aux = 2;
        result = 4;

        while (sum > result)    {
            aux++;
            result = aux * aux;
        }

        if (result === sum) {
            return true;
        }   else    {
            return false;
        }
    }
}

console.log(perfectSquareNumber(sum));