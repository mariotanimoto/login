body = document.querySelector("body");
console.log(body);
let emailUsuario = sessionStorage.getItem("emailUsuario");

body.innerHTML = `
    <h1>Bem vindo ${emailUsuario}</h1>`;