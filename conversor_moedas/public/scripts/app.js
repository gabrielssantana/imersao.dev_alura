var usd_valor = prompt("(USD/BRL) Qual o valor que deseja converter?")

var brl_valor = parseFloat(usd_valor) * 5.49

alert('O valor de US$ ' + usd_valor + ' é R$ ' + brl_valor.toFixed(2))

/*Revisão

Variáveis: var, int, float, string;

Funções: prompt(), alert(), parseInt(), parseFloat();

Argumentos: .toFixed.

Operações: + somar/aglutinar strings, - subtrair, * multiplicar, / dividir;

Comentar: // comentário de uma, /**/ /* comentário multilinha linha.*/