const nameInput = document.getElementById("nome");
const emailInput = document.getElementById("email");
const telInput = document.getElementById("telefone");
const checkInput = document.getElementById("aceito");
const form = document.getElementById("form");

nameInput.addEventListener("change", function () {
  ga("send", "event", "contato", "nome", "preencheu");
});

emailInput.addEventListener("change", function () {
  ga("send", "event", "contato", "email", "preencheu");
});

telInput.addEventListener("change", function () {
  ga("send", "event", "contato", "telefone", "preencheu");
});

checkInput.addEventListener("change", function () {
  ga("send", "event", "contato", "aceito", "preencheu");
});

form.addEventListener("submit", function () {
  ga("send", "event", "contato", "enviado", "enviado");
});
