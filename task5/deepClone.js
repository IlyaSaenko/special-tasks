const deepClone = (obj) => {
  if (obj === null || typeof obj !== 'object') return obj;

  const clone = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key]);
    }
  }

  return clone;
};

const original = {
  name: 'John',
  address: {
    city: 'New York',
    country: 'USA',
  }
};

const copy = deepClone(original);
copy.address.city = 'Los Angeles';

console.log(original.address.city); // New York (оригинальный объект не должен измениться)
console.log(copy.address.city); // Los Angeles
