function playGame() {
    var player1 = document.getElementById("player1").value;
    var player2 = document.getElementById("player2").value;
    var result = document.getElementById("result");
    var reverseResult = false; 
  
    if (player1 === "0" || player2 === "0") {
      result.textContent = "Seleccione una opción válida";
    } else  if (player1 === player2) {
      result.textContent = "Ninguno gana, empate";
    } else if (
      (player1 === "1" && player2 === "3") ||
      (player1 === "3" && player2 === "1")
    ) {
      
      result.textContent = "Piedra  aplasta Tijera ";
    } else if (
      (player1 === "2" && player2 === "1") || 
      (player1 === "1" && player2 === "2")
  
    ) {
      
      result.textContent = "Papel  cubre Piedra ";
    } else if (
      (player1 === "2" && player2 === "5") ||
      (player1 === "5" && player2 === "2")
    ) {
      result.textContent = "Papel  desautoriza Spock ";
    } else if (
      (player1 === "3" && player2 === "2") ||
      (player1 === "2" && player2 === "3")
    ) {
      result.textContent = "Tijera  corta Papel ";
    } else if (
      (player1 === "3" && player2 === "4") ||
      (player1 === "4" && player2 === "3")
    ) {
      result.textContent = "Tijera  decapita Lagarto ";
    } else if (
      (player1 === "4" && player2 === "5") ||
      (player1 === "5" && player2 === "4")
    ) {
      result.textContent = "Lagarto  envenena Spock ";
    } else if (
      (player1 === "4" && player2 === "2") ||
      (player1 === "2" && player2 === "4")
    ) {
      result.textContent = "Lagarto  debora Papel ";
    } else if (
      (player1 === "5" && player2 === "1") ||
      (player1 === "1" && player2 === "5")
    ) {
      result.textContent = "Spock  vaporiza Piedra ";
    } else if (
      (player1 === "4" && player2 === "1") ||
      (player1 === "1" && player2 === "4")
    ) {
      result.textContent = "Piedra  aplasta Lagarto ";
    } else if (
      (player1 === "5" && player2 === "3") ||
      (player1 === "3" && player2 === "5")
    ) {
      result.textContent = "Spock  rompe Tijera ";
    } else {
      result.textContent = "-";
    }
  }
  
  function getPlayerOption(option) {
    switch (option) {
      case "1":
        return "Piedra";
      case "2":
        return "Papel";
      case "3":
        return "Tijera";
      case "4":
        return "Lagarto";
      case "5":
        return "Spock";
      default:
        return "";
    }
  }
  
  const checkbox = document.getElementById('checkbox');
  
  checkbox.addEventListener('change', () => {
      //Change light <> dark
      document.body.classList.toggle('dark');
  });
  