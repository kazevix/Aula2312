let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");
const addProduto = document.getElementById("btn-adicionar-produto-01");
const subProduto = document.getElementById("btn-subtrair-produto-01");
const quantidadeProduto = document.getElementById("quantidade-produto-01");

let subtotalInfo = {
  
  valor:11.66,
};



function calculoValorTotal(quantidadeProduto){
valorSubtotal.innerText = (subtotalInfo.valor * quantidadeProduto).toFixed(2)
}

function updateSubTotalText() {
  quantidadeSubtotal.innerText = quantidadeProduto.value == 1? `${quantidadeProduto.value} item` : `${quantidadeProduto.value} itens`;
  calculoValorTotal(quantidadeProduto.value)
} 

function adicionarProduto(){
  if(quantidadeProduto.value < 10) {
  quantidadeProduto.value = Number(quantidadeProduto.value) + 1
  }
  updateSubTotalText()
};

function subtrairProduto() {
  if(quantidadeProduto.value > 1)  {
    quantidadeProduto.value = Number(quantidadeProduto.value) - 1
  }
updateSubTotalText()

}

addProduto.addEventListener('click', adicionarProduto);
subProduto.addEventListener('click', subtrairProduto);










