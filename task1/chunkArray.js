const chunkArray = (arr, size) => {
  const uniqueArr = [];

  for (let i = 0; i < arr.length; i += size) {
    uniqueArr.push(arr.slice(i, i + size));
  }

  return uniqueArr;
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 2));
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3));
