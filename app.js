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
