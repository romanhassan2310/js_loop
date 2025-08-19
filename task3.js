//------------Sum of all odd number from 81 to 131--------
// let num = 81;
// let sum = 0;
// while ( num <= 131){
//     console.log('Odd Number:',num);
//     sum = sum + num;
//     console.log( 'Sum:',sum);
//     num = num +2;
// }

// ----Sum of all the even numbers from 206 to 311---------

let num = 206;
let sum = 0;
while (num <= 311){
    // console.log( num);
    // sum = num + sum;
    if ( num % 2 === 0){
        console.log('Even Number:', num);
        sum = sum + num;
        console.log('Sum:', sum);
    }
    num++;
    
}

