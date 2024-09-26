// forma de nao exibir mais o formulario caso a pessoa ja tenha preenchido uma vez

//  seleçao
const formulario = document.querySelector("#form");
const btn = document.querySelector("#enviar");



// Verifica no localStorage se o formulário já foi enviado
if (localStorage.getItem("formEnviado") === "true") {
  formulario.innerHTML = "<p>Obrigado por preencher!</p>"; // Exibe a mensagem de agradecimento
}


//  eventos

btn.addEventListener("click", (e) => {
  e.preventDefault(); // Previne o comportamento padrão de enviar o formulário
  console.log("Clicou no botão");


  // Marca como enviado no localStorage
  localStorage.setItem("formEnviado", "true");

  // Substitui o conteúdo do formulário pela mensagem de agradecimento
  formulario.innerHTML = "<p>Obrigado por preencher!</p>";
});


