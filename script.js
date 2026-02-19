function steamrollArray(nestedArray) {
  let newArray = [];
  for (let i = 0; i < nestedArray.length; i++) {
    if (Array.isArray(nestedArray[i])) {
      newArray.push(...steamrollArray(nestedArray[i]));
    }
    else {
      newArray.push(nestedArray[i]);
    }
  }
  return newArray;
}

console.log(steamrollArray([[["a"]], [["b"]]])); //[ 'a', 'b' ]
console.log(steamrollArray([1, [2], [3, [[4]]]])); //[1, 2, 3, 4]
console.log(steamrollArray([1, [], [3, [[4]]]])); //[1, 3, 4]
console.log(steamrollArray([1, {}, [3, [[4]]]])); // [1, {}, 3, 4]