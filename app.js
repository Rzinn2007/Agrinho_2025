document.addEventListener("DOMContentLoaded", function () {
  const html = document.documentElement;
  let fontSize = 100;
  let highContrast = false;

  // Botões de acessibilidade (você deve adicioná-los ao HTML)
  const btnAumentar = document.getElementById("aumentarFonte");
  const btnDiminuir = document.getElementById("diminuirFonte");
  const btnContraste = document.getElementById("alternarContraste");

  btnAumentar.addEventListener("click", () => {
    if (fontSize < 150) {
      fontSize += 10;
      html.style.fontSize = fontSize + "%";
    }
  });

  btnDiminuir.addEventListener("click", () => {
    if (fontSize > 80) {
      fontSize -= 10;
      html.style.fontSize = fontSize + "%";
    }
  });

  btnContraste.addEventListener("click", () => {
    highContrast = !highContrast;
    document.body.classList.toggle("alto-contraste", highContrast);
  });

  // Teclas de atalho (Alt + número)
  document.addEventListener("keydown", function (e) {
    if (e.altKey) {
      switch (e.key) {
        case "1":
          document.getElementById("sobre").scrollIntoView();
          break;
        case "2":
          document.getElementById("atividades").scrollIntoView();
          break;
        case "3":
          document.getElementById("contato").scrollIntoView();
          break;
      }
    }
  });
});
