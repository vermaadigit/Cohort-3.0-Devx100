// function sum(a, b)
// {
//     let totalSum = a + b;
//     return totalSum;
// }

// let result = sum("Aditya", " Verma");
// console.log(result); // Output: 15

function canVote(age)
{
    if (age >= 18)
    {
        return true;
    }
    else
    {
        return false;
    }
}

let check = canVote(17);
console.log(check); // Output: false