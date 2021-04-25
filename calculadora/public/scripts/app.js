var operator = prompt('Digite: + para Soma, - para Subtração, * para Multiplicação, / para Divisão.')

var first_valor = parseFloat(prompt('Digite o primeiro valor:'))

var second_valor = parseFloat(prompt('Digite o segundo valor:'))

if(operator == '+'){
var result = first_valor + second_valor
document.write('<h2>' + first_valor + ' ' + operator + ' ' + second_valor + ' = ' + result + '</h2>')
}

else if(operator == '-'){
var result = first_valor - second_valor
document.write('<h2>' + first_valor + ' ' + operator + ' ' + second_valor + ' = ' + result + '</h2>')
}

else if(operator == '*'){
var result = first_valor * second_valor
document.write('<h2>' + first_valor + ' ' + operator + ' ' + second_valor + ' = ' + result + '</h2>')
}

else if(operator == '/'){
var result = first_valor / second_valor
document.write('<h2>' + first_valor + ' ' + operator + ' ' + second_valor + ' = ' + result + '</h2>')
}

else{
  document.write('<h2>Opção inválida.</h2>')
}

