class Calculator {
  constructor() {
    this.add = (a, b) => a + b;
    this.subtract = (a, b) => a - b;
    this.multiply = (a, b) => a * b;
    this.divide = (a, b) => {
      if (b === 0) {
        return 'Ошибка: делить на 0 нельзя';
      }

      return a / b;
    };
  }
}

const calc = new Calculator();

console.log(calc.add(2, 3)); // 5
console.log(calc.subtract(5, 3)); // 2
console.log(calc.multiply(4, 5)); // 20
console.log(calc.divide(10, 2)); // 5
console.log(calc.divide(10, 0)); // Ошибка: делить на 0 нельзя
