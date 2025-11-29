(function () {
  const corpoTabela = document.getElementById("corpo-tabela");
  const filtroInput = document.getElementById("filtro-nome");
  const btnLimpar = document.getElementById("btn-limpar");
  const headerPreco = document.getElementById("sort-preco");

  if (!corpoTabela) {
    console.error(
      "Erro: Tabela não encontrada. Verifique se o HTML carregou corretamente."
    );
    return;
  }

  const todosOsCafes = [
    {
      tipo: "Grão Arábica (Premiado)",
      torra: "Média",
      origem: "Claraval - MG",
      preco: "42.50",
      descricao: "Sabor equilibrado com notas de chocolate e frutas cítricas.",
    },
    {
      tipo: "Clássico da Fazenda",
      torra: "Escura",
      origem: "Claraval - MG",
      preco: "35.00",
      descricao: "Intenso e encorpado, perfeito para o café da manhã.",
    },
    {
      tipo: "Grão Bourbon Amarelo",
      torra: "Média Clara",
      origem: "Sul de Minas",
      preco: "45.00",
      descricao: "Aroma floral e finalização prolongada.",
    },
    {
      tipo: "Orgânico da Canastra",
      torra: "Média",
      origem: "Serra da Canastra - MG",
      preco: "48.00",
      descricao: "Cultivado de forma sustentável, notas de melaço.",
    },
    {
      tipo: "Café Moído Intenso",
      torra: "Escura",
      origem: "Claraval - MG",
      preco: "32.00",
      descricao: "Prático para o dia a dia, sabor marcante.",
    },
    {
      tipo: "Microlote Flor de Café",
      torra: "Clara",
      origem: "Claraval - MG",
      preco: "55.00",
      descricao: "Edição limitada. Notas exóticas de jasmim.",
    },
  ];

  let direcaoOrdenacao = "asc";

  function renderizarTabela(cafes) {
    corpoTabela.innerHTML = "";

    if (cafes.length === 0) {
      corpoTabela.innerHTML = `<tr><td colspan="5" style="text-align:center; padding: 20px;">Nenhum café encontrado.</td></tr>`;
      return;
    }

    cafes.forEach((cafe) => {
      const linha = document.createElement("tr");
      linha.innerHTML = `
                <td data-label="Tipo">${cafe.tipo}</td>
                <td data-label="Torra">${cafe.torra}</td>
                <td data-label="Origem">${cafe.origem}</td>
                <td data-label="Preço">R$ ${parseFloat(cafe.preco)
                  .toFixed(2)
                  .replace(".", ",")}</td>
                <td data-label="Descrição">${cafe.descricao}</td>
            `;
      corpoTabela.appendChild(linha);
    });
  }

  function filtrarCafes() {
    const termoBusca = filtroInput.value.toLowerCase();
    const cafesFiltrados = todosOsCafes.filter((cafe) =>
      cafe.tipo.toLowerCase().includes(termoBusca)
    );
    renderizarTabela(cafesFiltrados);
  }

  function ordenarPorPreco() {
    const termoBusca = filtroInput.value.toLowerCase();
    const cafesAtuais = todosOsCafes.filter((cafe) =>
      cafe.tipo.toLowerCase().includes(termoBusca)
    );

    cafesAtuais.sort((a, b) => {
      const precoA = parseFloat(a.preco);
      const precoB = parseFloat(b.preco);
      return direcaoOrdenacao === "asc" ? precoA - precoB : precoB - precoA;
    });

    direcaoOrdenacao = direcaoOrdenacao === "asc" ? "desc" : "asc";
    headerPreco.innerHTML = `Preço (R$) <span style="font-size:0.8em">${
      direcaoOrdenacao === "asc" ? "↓" : "↑"
    }</span>`;

    renderizarTabela(cafesAtuais);
  }

  if (filtroInput) filtroInput.addEventListener("input", filtrarCafes);

  if (btnLimpar) {
    btnLimpar.addEventListener("click", () => {
      filtroInput.value = "";
      renderizarTabela(todosOsCafes);
    });
  }

  if (headerPreco) headerPreco.addEventListener("click", ordenarPorPreco);

  renderizarTabela(todosOsCafes);
})();
