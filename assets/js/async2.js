"use strict";

// Manitoba Institute of Trades and technology
// JavaScript Intro to thir-party APIs
// Aaron Dayrit
/*
    'then' 
        adds a fulfilled handler to call if/when the promise 
        gets fulfilled
    
    'catch'
        adds a rejection handler to call if/when the promise 
        gets rejected

    'finally'
        adds a finally handler to call if/when the promise 
        gets settled, regardless of flow
*/

const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/*-------------------------------
    Try/Catch
        - Used for catching errors
          in the console
---------------------------------*/
const checkNumber = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(randomNumber(1, 10));
        }, 3000);    
    });
}

// checkNumber()
//     .then(success)
//     .catch(failure)
//     .finally(finish);

async function result() {
    try{
        const final = await checkNumber();
        console.log(`Your number is ${final}`);
        console.log('Did you like your number?');

    }catch(error){
        console.log(error);
    }
}

result();