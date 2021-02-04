const arrayOfNumbers: Array<number> = [1, 2, 3, 4, 5, 6];
const arrayOfStrings: Array<string> = ['A', 'B', 'C', 'D', 'E'];

function someGenericFunction<T>(array: T[]): T[] {
    return array.reverse();
}

console.log(someGenericFunction(arrayOfNumbers));
console.log(someGenericFunction(arrayOfStrings));

console.log(arrayOfNumbers);
console.log(arrayOfStrings);
