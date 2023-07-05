window.addEventListener("load", () => {

  titulo = document.querySelector("h1");
  let nomeUsuario = sessionStorage.getItem("nomeUsuario");
  let nomeExibido = JSON.parse(nomeUsuario);

  titulo.innerText = ` Bem vindo ${nomeExibido} `;
  let botaoSair = document.querySelector("#sair");
  console.log(botaoSair);
  botaoSair.addEventListener("click", () => {
    sessionStorage.clear();
    const url = "index.html";
    window.location = url;
  });

});

body.innerHTML = `
    <h1>Bem vindo `+ emailExibido `<h1>`;