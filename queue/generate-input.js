/**
 * @fileOverview
 * 
 * Generate inpur numbers once and hard code it into profile.js
 * Do NOT run this script in runtime.
 */

const N = 10000;
const res = [];

for (let i = 0; i < N; i++) {
    res.push(Math.ceil(1000 * Math.random()));
}

console.log(JSON.stringify(res));
