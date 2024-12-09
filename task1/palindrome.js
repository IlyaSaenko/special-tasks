const isPalindrom = (str) => {
  str = str.toLowerCase().replace(/[^a-zа-яё]/g, '');

  if (str === str.split('').reverse().join('')) {
    return true;
  }

  return false;
}

console.log(isPalindrom('А роза упала на лапу Азора')); // === true;
console.log(isPalindrom('Привет')); // === false;
console.log(isPalindrom('А, роза упала на лапу Азора')); // === true;
