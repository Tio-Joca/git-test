let a = 'M'
let b = 23;
let c = 3;

if ((a === 'M' && b >= 65 && c >= 25) ^ (a === 'F' && b >= 62 && c >= 20))  {
    console.log("Congratulations! You can retire.");
}   else    {
    console.log("Keep working.");
}

function prime (x)  {
    let verify;
    let divider;

    if (x <= 1) {
        return false;
    }   else    {
        divider = 2;
        verify = true;

        while (divider < x && verify)   {
            if (x % divider === 0)  {
                verify = false;
            }   else    {
                ++divider;
            }
        }
        return verify;
    }
}

console.log(prime(23));