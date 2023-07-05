const usuarios = [
  {
    id: 1,
    name: "Taynara Dutra",
    email: "taynara@ifpr.edu.br",
    senha: "12345",
  },
  {
    id: 2,
    name: "Fulano Silva",
    email: "fulano@gmail.com",
    senha: "12345",
  },
  {
    id: 3,
    name: "Fabiano Meira",
    email: "fabiano.meira@gmail.com",
    senha: "12345",
  },
];
//deve-se trabalhar com essa lista e converte-la para objetos.
const usuariosJSON = JSON.stringify(usuarios);

/* JSON.parse()*/

const listaUsuarios = JSON.parse(usuariosJSON);

let form = document.querySelector("form");
const botaoLogar = document.querySelector("#form-botao");
console.log("teste");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let email = document.querySelector("#email").value;
  let senha = document.querySelector("#senha").value;
  let emailHTML = document.querySelector("#email");
  let senhaHTML = document.querySelector("#senha");
  
  console.log('email:' + email);
  console.log('seha : ' +senha);
  console.log("oiiii");

      let control = true;
      

      if (email.trim() === "") {
        emailHTML.classList.add("erro");
        console.log("nome nulo")
        control = false;
      }else{
        emailHTML.classList.remove("erro");
      }
      if (senha.trim() === "") {
        senhaHTML.classList.add("erro");
        console.log("senha nula")
        control = false;
      }else{
        senhaHTML.classList.remove("erro");
      };

      console.log("validação feita")
      if ((control = true)) {
        listaUsuarios.forEach((usuario) => {
          if (
            usuario.email.toUpperCase() == email.trim().toUpperCase() &&
            usuario.senha.toUpperCase() == senha.trim().toUpperCase()
          ) {
            console.log("deu bom");
            //inserir em JSON e inserir session storage
            sessionStorage.setItem("nomeUsuario", JSON.stringify(usuario.name));
            console.log(usuario.email);
            //ou passar 3 atributos
            //passar para a proxima pagina
            const url = "bemvindo.html";
            window.location = url;
          } else {
            //alert
            console.log("nops");
          }
        });
      } else {
        return control;
      }
    });

//// ATIVIDADE

/// Passo a passo:

// 1) Quando a pessoa faz o login, deve-se validar login e senha não estão nulos.

// 2)  Se não estiverem, deve-se verificar se estão na lista dos dados.

// 3) Se estiver correta deve ser armazenado as informações do usuário (guardar um json do usuário (Não pode armazenar senha)) no localStorage.

// 4) Deve-se redirecionar  para uma nova página em que haverá um mensagem de "Bem-vind@ Fulano" e um botao de inserir.

// 5) Sempre que a página for recarrega (onload), deve-se validar a informação do usuário (verificar se existe um usuário na sessão).

// 6) Caso o usuário clique em sair, deve ser redirecionado para a página de login e removido do localStorage.
