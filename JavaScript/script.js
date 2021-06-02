"use strict"
let valorEmReal = document.getElementById('valorReal');

let buttonSubmit = document.getElementById('buttonCalc').addEventListener('click', converterDolar);


function converterDolar(event) {

  if(valorEmReal.value == null){
    alert('Favor, inserir um valor válido')
  }

  let resultado = (valorEmReal.value * 5.60).toFixed(2);
  
  document.getElementById('valorResultado').innerHTML = `Resultado: R$ ${resultado} dólares`;
}
