const loremDiv = document.getElementById("lorem-div");
const ipsumDiv = document.getElementById("ipsum-div");
const dolorDiv = document.getElementById("dolor-div");

loremDiv.addEventListener("click", function () {
  ga("send", "event", "analise", "ver_mais", "Lorem");
});

ipsumDiv.addEventListener("click", function () {
  ga("send", "event", "analise", "ver_mais", "Ipsum");
});

dolorDiv.addEventListener("click", function () {
  ga("send", "event", "analise", "ver_mais", "Dolor");
});
