"use strict";

// Manitoba Institute of Trades and technology
// JavaScript Intro to thir-party APIs
// Aaron Dayrit

/*
A 'Promise' is an object that helps you manage an asynchronous task. It tracks
 the state of the task and - most importantly - handles the callbacks that
 notify your code when the task succeeds or fails. Technically, promises don't
 add new functionality to JavaScript, but they do make it easier to cleanly
 coordinate a sequence of asynchronous operations
 
 A 'Promise' object is not a result, but a placeholder for a result that will
 be available in the future. A 'Promise' has three possible states: pending,
 fulfilled and rejected
 
 A 'Promise' function receives two parameters, which are essentially callback
 functions. You use these functions to signal the completion of the promise.
 Call resolve(value) - with your return value - to successfully end the
 promise, or reject(error) - with an error object - to indicate a failure
 */

const promise = new Promise(resolve => {
    // resolve = return (value);
    resolve('I am done');
});
promise.then(value => console.log(value));

const newPromise = new Promise(resolve => {
    resolve('12345');
});
newPromise.then(value => console.log(value));

const lastPromise = new Promise(resolve => {
    resolve([12,23,34]);
});
lastPromise.then(value => console.log(value[1]));