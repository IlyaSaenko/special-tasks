const debounce = (func, delay) => {
  let timer = null;

  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
};

const debouncedFunction = debounce((message) => {
  console.log(`Сообщение: ${message}`);
}, 1500);

debouncedFunction('Привет, Лисбон!');
debouncedFunction('Привет, Джейн!');
debouncedFunction('Как дела?');

setTimeout(() => {
  debouncedFunction('Всё прекрасно!');
}, 2000);
