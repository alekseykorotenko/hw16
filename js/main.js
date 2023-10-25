let plusMath = +prompt('Скільки буде 2+2?');
let sunrise = confirm('Сонце встає на сході?');
let separationMath = +prompt('Скільки буде 5 / 0?');
let skyColor = prompt('Якого кольору небо?');
let senseOfLife = +prompt(
  'Яка правильна відповідь на головне питання життя, всесвіту та всього такого.'
);

let sumResult = 0;

if (plusMath == 4) {
  sumResult += 10;
}

if (sunrise == true) {
  sumResult += 10;
}

if (separationMath == Infinity) {
  sumResult += 10;
}

if (skyColor == 'голубого') {
  sumResult += 10;
}

if (senseOfLife == 42) {
  sumResult += 10;
}

alert(sumResult);
