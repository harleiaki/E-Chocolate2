import { catalogo } from "./utilidades";
import { adicionarAoCarrinho } from "./menuCarrinho";

export function renderizarCatalogo() {
  for (const produtoCatalogo of catalogo) {
    const cartaoProduto = `<div class='border-solid w-48 m-2 flex flex-col p-2 justify-between shadow-xl bg-gradient-to-r from-fuchsia-200 to-blue-200 rounded-lg group ${
      produtoCatalogo.japones ? "japones" : "brasileiro"
    }' id="card-produto-${produtoCatalogo.id}">
        <img
        src="./assets/img/${produtoCatalogo.imagem}"
        alt="Kit Kat 1 ."
        class='group-hover:scale-110 duration-300 my-3 rounded-lg'
        />
        <p class='text-center'>${produtoCatalogo.marca}</p>
        <p class='text-center'>${produtoCatalogo.nome}</p>
        <p class='text-center'>${produtoCatalogo.preco}</p>
        <button id='adicionar-${
          produtoCatalogo.id
        }' class='bg-slate-950 hover:bg-gradient-to-l from-indigo-500 text-slate-200'
        ><i class="fa-solid fa-cart-plus"></i></button>
        </div>`;

    document.getElementById("container-produto").innerHTML += cartaoProduto;
  }

  for (const produtoCatalogo of catalogo) {
    document
      .getElementById(`adicionar-${produtoCatalogo.id}`)
      .addEventListener("click", () => adicionarAoCarrinho(produtoCatalogo.id));
  }
}
