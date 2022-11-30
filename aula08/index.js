const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const alt = 1.80;
let imc = peso / (alt * alt);
let nasc = 2022 - 30
console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg');
console.log('tem ' + alt + ' de altura e seu IMC é de ' + imc);
console.log(`${nome} nasceu em ${nasc}`); // Melhor forma de se usar atualmente