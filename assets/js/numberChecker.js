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
            try{
                // Creates the number
                const number = randomNumber(1, 10);
                const even = number % 2 === 0;

                //Check if it is even
                if(even){
                    console.log(`${number} is even`);
                    resolve(number);
                }else{
                    console.log(`${number} is odd`);
                    throw new Error('number is not even');
                }
            }catch(error){
                reject(error);
            }
        }, 1000)
    });
}

/*-------------------------------
    Callbacks for when promises
    are finished
---------------------------------*/
const success = (value) => {
    console.log(value);
}

const failure = (error) => {
    console.log(error);
}

const finish = () => {
    console.log('Nish is done');
}

checkNumber()
    .then(success)
    .catch(failure)
    .finally(finish);