let a = 'M'
let b = 23;
let c = 3;

if ((a === 'M' && b >= 65 && c >= 25) ^ (a === 'F' && b >= 62 && c >= 20))  {
    console.log("Congratulations! You can retire.");
}   else    {
    console.log("Keep working.");
}