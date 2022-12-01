// O sinal '+' pode ser usado com adição ou concatenação(junção)

const passo = 25;
contador = 0;
contador = contador + passo;
console.log(contador);
contador = contador + passo;
console.log(contador);
contador = contador + passo;
console.log(contador);

contador += passo;
console.log(contador);
contador -= 10;
console.log(contador);

// NaN -> Not a number
const num1 = 10;
const num2 = 'Neymmar';
console.log(num1 * num2);

//convertendo uma string pra numero

const num3 = 10;
const num4 = Number('5.5');
console.log(num3 + num4);