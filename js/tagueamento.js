const contactAnchor = document.getElementById("contact-anchor");
const downloadAnchor = document.getElementById("download-anchor");

contactAnchor.addEventListener("click", function () {
  ga("send", "event", "menu", "entre_em_contato", "link_externo");
});

downloadAnchor.addEventListener("click", function () {
  ga("send", "event", "menu", "download_pdf", "download_pdf");
});
