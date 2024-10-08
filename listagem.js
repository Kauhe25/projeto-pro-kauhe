import './src/assets/scss/listagem.scss'

window.addEventListener("load", iniciarProcesso)

async function iniciarProcesso() {

    const livros = await buscarLivros()

    construirTabelaComLivros(livros)
}

function buscarLivros() {
    return [
        {   
            id:"aaa",
            title:"aaa",
            descriprion:"aaa",
        },
        {   
            id:"bb",
            title:"bb",
            descriprion:"b",
        }, 
        {
            id:"cc",
            title:"cc",
            descriprion:"c",
        },
    ]
}

function construirTabelaComLivros(livros){

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

    //construir a tabela
}