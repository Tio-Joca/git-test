let a = 'M'
let b = 23;
let c = 3;

if ((a === 'M' && b >= 65 && c >= 25) ^ (a === 'F' && b >= 62 && c >= 20))  {
    console.log("Congratulations! You can retire.");
}   else    {
    console.log("Keep working.");
}

function prime (x, y = 2)   {
    if (x <= 1 ^ (x % y === 0 && x !== y)) {
        return false;
    }   else if (x === y)   {
        return true;
    }   else    {
        return prime(x, y + 1);
    }
}

console.log(prime(23));

