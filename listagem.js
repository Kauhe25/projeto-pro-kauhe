import './src/assets/scss/listagem.scss'

const URL_API_CONSULTA_LIVROS = "https://api-aula.up.railway.app/livros";

window.addEventListener("load", iniciarProcesso)

async function iniciarProcesso() {

    const livros = await buscarLivros()

    construirTabelaComLivros(livros)
}

async function buscarLivros() {
    const response = await fetch(URL_API_CONSULTA_LIVROS);
    const livros = await response.json();
    return livros;
}

function construirTabelaComLivros(livros){

    console.log(livros)
    //pegar elemento da tabela
    const corpoTabela = document.getElementById("tabelaLivros__tbody");

    corpoTabela.innerHTML = "";

    livros.forEach(livro => {
        corpoTabela.innerHTML += `
        <tr>
            <td>${livro.title}</td>
            <td>${livro.descriprion}</td>
        </tr>`
    });

}