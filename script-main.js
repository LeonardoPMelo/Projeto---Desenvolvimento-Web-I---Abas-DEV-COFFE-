function carregarPagina(url, elementoClicado) {
  const iframe = document.getElementById("main-frame");

  if (iframe) {
    iframe.style.opacity = "0";

    setTimeout(() => {
      iframe.src = url;
      iframe.onload = () => {
        iframe.style.opacity = "1";
      };
    }, 200);

    console.log("Navegando para: " + url);
  }

  if (elementoClicado) {
    const itens = document.querySelectorAll(".sidebar li");
    itens.forEach((item) => item.classList.remove("active"));
    elementoClicado.classList.add("active");
  }
}

window.addEventListener("load", () => {
  const iframe = document.getElementById("main-frame");
  if (iframe) iframe.style.opacity = "1";
});
