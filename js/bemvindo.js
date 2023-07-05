body = document.querySelector("body");
console.log(body);
let nomeUsuario = sessionStorage.getItem("nomeUsuario");
let nomeExibido = JSON.parse(nomeUsuario);

body.innerHTML = `
    <h1>Bem vindo ${nomeExibido} <h1>`;