const URL_API_CONSULTA_LIVROS = "https://api-aula.up.railway.app/livros";

async function mostrarLivros() {
    const response = await fetch(URL_API_CONSULTA_LIVROS);
    const livros = await response.json();
    const tabelaPopulada = criarTabelaLivros(livros);
    let elementoCaixaLivros = document.getElementById('caixa_livros'); 
    elementoCaixaLivros.innerHTML = tabelaPopulada;    
}

function criarTabelaLivros (livros) {
    let dadosTabela = '';

    for(let i = 0; i< livros.length; i++){

        dadosTabela += 
        `<tr>
            <td>${livros[i].title}</td>
            <td>${livros[i].description}</td>
        </tr>`
    }
    const inicioTabela = `
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Título</th>
                    <th>Descrição</th>
                </tr>
            </thead>
            <tbody>`;

    const fimTabela = `
            </tbody>
        </table>`;    

    return inicioTabela + dadosTabela + fimTabela; 
}


async function cadastrarLivro() {
    const titulo = document.getElementById('title').value; 
    const descricao = document.getElementById('description').value; 
    const elementoLabel = document.getElementById('labelResultado'); 


    const response = await fetch(URL_API_CONSULTA_LIVROS, {
        method: "POST", 
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            title: titulo,
            description: descricao
        })
    })

    if(response.status == 201){
        elementoLabel.innerHTML = "Cadastrado com Sucesso";
        elementoLabel.style.backgroundColor = "green";

    }else {
        elementoLabel.innerHTML = "Falha ao Cadastrar";
        elementoLabel.style.backgroundColor = "red";
    }
    
}