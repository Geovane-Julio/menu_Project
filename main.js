// Simulação de adição de itens de pedido
// Seleciona todos os botões que possuem classe "adicionar"

const botoesAdicionar = document.querySelectorAll('.adicionar');
const listaPedido = document.getElementById("lista-pedido");
const totalElemento = document.getElementById('total');

let total = 0;

botoesAdicionar.forEach((botao) => {
    botao.addEventListener('click', () => {
        const produto = botao.parentElement;

        const nome = produto.querySelector('h5').textContent;

        // Converter o preço pra decimal removendo R$
        const preco = parseFloat(produto.querySelector(".preco").textContent.replace("R$",""));

        const itemPedido = document.createElement("li");

        itemPedido.textContent = `${nome} - R$ ${preco.toFixed(2)}`;
        listaPedido.appendChild(itemPedido);

        // atuliza o total da compra 
        total += preco;
        totalElemento.textContent = `Total: R$ ${total.toFixed(2)}`;
    })
})

const botaoFinalizarPedido = document.getElementById('finalizar-pedido');

botaoFinalizarPedido.addEventListener("click", () => {
    alert("Pedido finalizado com sucesso " + totalElemento.textContent);

    listaPedido.innerHTML = '';
    total = 0;

    totalElemento.textContent = `Total: R$ ${total.toFixed(2)}`;
})