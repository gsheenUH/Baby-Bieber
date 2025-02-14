import { bieberBaby } from './baby-bieber-lyrics';

function hasYeah(array: string[]): boolean {
  return array.some(given => given.includes('yeah'));
}

function numYeah(strings: string[]): number {
  return strings.map(str => (str.match(/yeah/g) || []).length).reduce((total, count) => total + count, 0);
}

console.log(hasYeah(bieberBaby));
console.log(numYeah(bieberBaby));
