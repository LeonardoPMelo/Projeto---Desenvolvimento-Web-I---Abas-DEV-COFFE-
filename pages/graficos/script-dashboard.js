document.addEventListener("DOMContentLoaded", () => {
  const disciplinas = [
    "Algoritmos",
    "Banco de Dados",
    "Eng. Software",
    "Sist. Operacionais",
    "Desenv. Web",
    "Design Digital",
  ];
  const notas = [10.0, 9.5, 10.0, 10.0, 10.0, 9.0];
  const notaMaxima = 10.0;
  const percentuais = notas.map((nota) => (nota / notaMaxima) * 100);

  const theme = {
    accent: "#d3ad7f",
    accentHover: "#e3b889",
    text: "#f0f0f0",
    grid: "rgba(211, 173, 127, 0.15)",
    tooltipBg: "rgba(20, 20, 25, 0.95)",

    colors: [
      "rgba(211, 173, 127, 0.8)",
      "rgba(140, 107, 74, 0.8)",
      "rgba(227, 184, 137, 0.8)",
      "rgba(94, 71, 56, 0.8)",
      "rgba(168, 168, 168, 0.8)",
      "rgba(255, 228, 196, 0.8)",
    ],
    borders: ["#d3ad7f", "#8c6b4a", "#e3b889", "#5e4738", "#a8a8a8", "#ffe4c4"],
  };

  Chart.defaults.font.family = "'Poppins', sans-serif";
  Chart.defaults.color = theme.text;
  Chart.defaults.scale.grid.color = theme.grid;

  const commonOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: { color: theme.text, font: { size: 12 } },
      },
      tooltip: {
        backgroundColor: theme.tooltipBg,
        titleColor: theme.accent,
        bodyColor: theme.text,
        borderColor: theme.accent,
        borderWidth: 1,
        padding: 10,
      },
    },
  };

  new Chart(document.getElementById("graficoBarrasVerticais"), {
    type: "bar",
    data: {
      labels: disciplinas,
      datasets: [
        {
          label: "Nota Final",
          data: notas,
          backgroundColor: theme.colors,
          borderColor: theme.borders,
          borderWidth: 1,
        },
      ],
    },
    options: {
      ...commonOptions,
      scales: { y: { beginAtZero: true, max: 10 } },
      plugins: { ...commonOptions.plugins, legend: { display: false } },
    },
  });

  new Chart(document.getElementById("graficoBarrasHorizontais"), {
    type: "bar",
    data: {
      labels: disciplinas,
      datasets: [
        {
          label: "Aproveitamento (%)",
          data: percentuais,
          backgroundColor: theme.accent,
          borderColor: theme.accentHover,
          borderWidth: 1,
        },
      ],
    },
    options: {
      ...commonOptions,
      indexAxis: "y",
      scales: { x: { beginAtZero: true, max: 100 } },
      plugins: { ...commonOptions.plugins, legend: { display: false } },
    },
  });

  new Chart(document.getElementById("graficoLinha"), {
    type: "line",
    data: {
      labels: disciplinas,
      datasets: [
        {
          label: "Nota",
          data: notas,
          borderColor: theme.accent,
          backgroundColor: theme.accent,
          borderWidth: 2,
          tension: 0.4,
          pointBackgroundColor: "#000",
          pointBorderColor: theme.accent,
          pointRadius: 4,
        },
      ],
    },
    options: {
      ...commonOptions,
      scales: { y: { beginAtZero: true, max: 10 } },
      plugins: { ...commonOptions.plugins, legend: { display: false } },
    },
  });

  new Chart(document.getElementById("graficoPizza"), {
    type: "doughnut",
    data: {
      labels: disciplinas,
      datasets: [
        {
          data: notas,
          backgroundColor: theme.colors,
          borderColor: "#111",
          borderWidth: 2,
        },
      ],
    },
    options: {
      ...commonOptions,
      plugins: {
        legend: {
          position: "right",
          labels: { color: theme.text, boxWidth: 12 },
        },
      },
    },
  });

  new Chart(document.getElementById("graficoRadar"), {
    type: "radar",
    data: {
      labels: disciplinas,
      datasets: [
        {
          label: "Competência",
          data: notas,
          backgroundColor: "rgba(211, 173, 127, 0.3)",
          borderColor: theme.accent,
          pointBackgroundColor: theme.accent,
          pointHoverBorderColor: "#fff",
        },
      ],
    },
    options: {
      ...commonOptions,
      scales: {
        r: {
          angleLines: { color: theme.grid },
          grid: { color: theme.grid },
          pointLabels: { color: theme.text, font: { size: 11 } },
          ticks: { display: false, backdropColor: "transparent" },
          suggestedMin: 0,
          suggestedMax: 10,
        },
      },
    },
  });
});
