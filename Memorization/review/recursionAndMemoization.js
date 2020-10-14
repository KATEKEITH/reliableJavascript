let fibonacci = function (number) {
  if (numberb < 2) {
    return number;
  } else {
    return fibonacci(number - 1) + fibonacci(number - 2);
  }
};

let fibonacci = (function () {
  let save = {};
  let fibo = function (number) {
    if (number < 2) {
      return number;
    } else {
      let saved1 = save[number - 1] || fibo(number - 1);
      let saved2 = save[number - 2] || fibo(number - 2);
      let result = saved1 + saved2;
    }
  };
})();
