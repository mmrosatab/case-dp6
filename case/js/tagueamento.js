const contactAnchor = document.getElementById("contact-anchor");
const downloadAnchor = document.getElementById("download-anchor");

contactAnchor.addEventListener("click", function () {
  ga("send", "event", "menu", "entre_em_contato", "link_externo");
});

downloadAnchor.addEventListener("click", function () {
  ga("send", "event", "menu", "download_pdf", "download_pdf");
});

// const loremDiv = document.getElementById("lorem-div");
// const ipsumDiv = document.getElementById("ipsum-div");
// const dolorDiv = document.getElementById("dolor-div");

// ipsumDiv.addEventListener("click", function () {
//   console.log("erwer");
//   ga("send", "event", "analise", "ver_mais", "Lorem");
// });

// loremDiv.addEventListener("click", function () {
//   console.log("erwer");
//   ga("send", "event", "analise", "ver_mais", "Ipsum”");
// });

// dolorDiv.addEventListener("click", function () {
//   console.log("erwer");
//   ga("send", "event", "analise", "ver_mais", "Dolor");
// });
