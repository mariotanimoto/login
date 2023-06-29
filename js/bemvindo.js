body = document.querySelector("body");
console.log(body);
let emailUsuario = sessionStorage.getItem("emailUsuario");
let emailExibido = JSON.parse(emailUsuario);

body.innerHTML = `
    <h1>Bem vindo `+ emailExibido `<h1>`;