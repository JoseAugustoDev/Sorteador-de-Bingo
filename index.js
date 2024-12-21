var botaoQuantidade = document.getElementById("button-quant");

var divQuantidade = document.querySelector(".quantidade");

var divNumSorteado = document.querySelector(".num-sorteado");

var novoNum = document.querySelector("#novo-num");

var numsSorteados = document.querySelector("#nums-sorteados");

var divNumsSorteados = document.querySelector(".nums-sorteados");

var quantidade = 0;

botaoQuantidade.addEventListener("click", () => {
     quantidade = document.getElementById("quant").value;

     divQuantidade.style = "display: none;";

     let nums_sorteados = [];
     
     novoNum.addEventListener("click", () => {
          
          if (nums_sorteados.length < quantidade ) {
               num = sortearNumero(1, quantidade);
               
               console.log(num);
               
               if (!nums_sorteados.includes(num)) {
                    console.log("O número sorteado é: " + num);
                    
                    nums_sorteados.push(num);
                    divNumSorteado.innerHTML = num;
               } else {
                    while (nums_sorteados.includes(num)) {
                         num = sortearNumero(1, quantidade);
                    }
                    nums_sorteados.push(num);
                    divNumSorteado.innerHTML = num;
     
               }
               
          } else {
               divNumsSorteados.innerHTML = nums_sorteados;
               
          }
          
     })

     numsSorteados.addEventListener("click", () => {
          divNumsSorteados.innerHTML = nums_sorteados;
          console.log(nums_sorteados);
     })



     
});

function sortearNumero(min, max) {
     return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(quantidade);