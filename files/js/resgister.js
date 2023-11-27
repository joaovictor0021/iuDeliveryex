//Register
const sign_in_btn = document.querySelector("#sign-login-btn");
const sign_up_btn = document.querySelector("#create-account-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});


document.getElementById("login").addEventListener("click", function() {
  validarCampos();
  // Outras ações que você pode querer executar após a validação, se necessário
});

function validarCampos() {
  // Obtém os valores dos campos de input
  var usuario = document.getElementById("usuario").value;
  var senha = document.getElementById("senha").value;

  // Verifica se ambos os campos estão preenchidos
  if (usuario.trim() !== "" && senha.trim() !== "") {
    // Redireciona para a outra página
    window.location.href = "index.html";
  } else {
    // Adiciona uma classe para destacar os campos obrigatórios não preenchidos
    document.getElementById("usuario").classList.add("campo-obrigatorio");
    document.getElementById("senha").classList.add("campo-obrigatorio");
  }
}