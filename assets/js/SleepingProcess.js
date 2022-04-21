"use strict";

// Manitoba Institute of Trades and technology
// JavaScript Intro to thir-party APIs
// Aaron Dayrit

/*
    Resolve                new Promise             Reject
    state:"fulfilled"   <- state: pending" =>      state: "rejected"
    result: value          result: "undefined"     result: error
*/

/*
    WILL ALWAYS HAVE TWO CALLBACKS:
        -Reject
        -Resolve
*/

const wakeUp = () => {
    console.log('I was tired');
};

const ready = () => {
    console.log(`I'm ready now`);
};

const sleep = (duration) => {
    return new Promise(resolve => {
        console.log(`I'm sleeping`);
        // calls (resolve) on a timeout of (duration)
        setTimeout(resolve, duration);
    })
}

sleep(3000).then(wakeUp).finally(ready);