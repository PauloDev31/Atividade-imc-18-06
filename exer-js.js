let rs = require('readline-sync')
let peso = rs.questionFloat("Digite seu peso.")
let altura = rs.questionFloat("Digite sua altura.")

let imc = peso / (altura  * altura)
console.log("seu imc é " + imc)

if (imc < 18.5)
    console.log("Você está abaixo do peso, consulte um nutricionista.");
else  if (imc > 18.5 && imc < 24.9)
    console.log("Voce está no peso ideal.");

else if (imc > 25 && imc < 29.9)
    console.log("Voce está ligeiramente acima do peso, pratique exercícios.");

else if (imc > 30 && imc < 34.9)
    console.log("Voce está na fase 1 da obesidade, procure um médico e se cuide.");
else if (imc > 35 && imc < 39.9)
    console.log("Voce está na fase 2 da obesidade (severa), que leva riscos a saúde ,procure um médico e se cuide.");

else if (imc > 40)
    console.log("Voce está na fase 3 da obesidade (mórbida), se cuide, todos te amam :)");

