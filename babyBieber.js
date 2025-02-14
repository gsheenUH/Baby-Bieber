"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baby_bieber_lyrics_1 = require("./baby-bieber-lyrics");
function hasYeah(array) {
    return array.some(given => given.includes('yeah'));
}
function numYeah(strings) {
    return strings.map(str => (str.match(/yeah/g) || []).length).reduce((total, count) => total + count, 0);
}
console.log(hasYeah(baby_bieber_lyrics_1.bieberBaby));
console.log(numYeah(baby_bieber_lyrics_1.bieberBaby));
