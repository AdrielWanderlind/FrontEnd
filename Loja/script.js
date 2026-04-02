 const produtos = {
	"123": {"nome": "lepo","preco":9.90},
	"456": {"nome": "vapo","preco":9.90},
	"789": {"nome": "la-ele","preco":9.90},
	"147": {"nome": "ai dentu","preco":9.90}
};

let carrinho = [];

const audio = new Audio("plank.mp3");

window.onload = () => {
    document.getElementById("cod").focus();
};

function addProduto(){
      const codElemento = document.getElementById("cod");
      const qtdElemento = document.getElementById("qtd");

      const codValue = codElemento.value;
      const qtdValue = parseInt(qtdElemento.value);

      if(!produtos[codValue]){
        alert("Produto não Cadastrado");
        return;
      }
      const produtoBase = produtos[codValue];

      const item = {
              nome: produtoBase.nome,
              preco: produtoBase.preco,
              quantidade: qtdValue,
              subTot: produtoBase.preco * qtdValue
      };

      carrinho.push(item);
      audio.currentTime=0;
	audio.playbackRate = 1.5; 
      audio.play();

	codElemento.value = "";
	qtdElemento.value = 1;

	atualizaTela();	


function atualizaTela(){
	const lista = document.getElementById("lista");
	lista.innerHTML = "";

	let total = 0;

	carrinho.forEach((item, index) =>{
		total += item.subTot;
		
		const li = document.createElement("li");
		li.className = "list-group-item";
		li.innerHTML = `<div class="d-flex"> <strong>${item.nome}
		</strong> <small>${item.quantidade} X ${item.preco}= 
		<strong> ${item.subTot}</strong></small></div>
		`;
		
		
		lista.appendChild(li);
	});
}

}

