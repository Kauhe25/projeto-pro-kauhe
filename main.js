import './src/assets/scss/cadastro.scss'

const URL_API_CONSULTA_LIVROS = "https://api-aula.up.railway.app/livros";

window.addEventListener('load', function() {
  //console.log('função onload - teste')
})

document.getElementById("btnCadastrar")
  .addEventListener("click", iniciarProcesso)

async function iniciarProcesso (){
  alert("oi");
  const titulo = document.getElementById("inputTitulo").value;
  const descricao = document.getElementById("inputDescricao").value;

  const settings =  {
    method: "POST",
    headers: {
      "Accept":"application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title:titulo,
      description: descricao
    })
  }

  const fechResult = await fetch(URL_API_CONSULTA_LIVROS, settings)

  alert(fechResult.status);
  if(fechResult.status == 201){
    elementoLabel.innerHTML = "Cadastrado com Sucesso";
    elementoLabel.style.backgroundColor = "green";

  }else {
    elementoLabel.innerHTML = "Falha ao Cadastrar";
    elementoLabel.style.backgroundColor = "red";
  }
}