"use strict";

// Manitoba Institute of Trades and technology
// JavaScript Intro to thir-party APIs
// Aaron Dayrit

/* --------------------------------------------
    Intro to prmises: Asynchronous tasks 
--------------------------------------------*/

const message = () => {
    console.log('Hello, Hambo!');
}

setTimeout(() => {console.log('one')}, 5000);
setTimeout(() => {console.log('two')}, 1000);
setTimeout(() => {console.log('three')}, 3000);
message();
