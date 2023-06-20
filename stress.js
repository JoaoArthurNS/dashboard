var btnAntiStress = document.getElementById("btnAntiStress");
var modal = document.getElementById("modal");
var closeBtn = document.getElementsByClassName("close")[0];

// Variáveis para armazenar a posição inicial do botão
var initialX;
var initialY;
var isDragging = false;
var isClick = false;

// Função para exibir a modal
function exibirModal() {
  modal.style.display = "block";
}

// Função para fechar a modal
function fecharModal() {
  modal.style.display = "none";
}

// Event listeners
btnAntiStress.addEventListener("click", function(event) {
  if (!isDragging) {
    exibirModal();
  }
});

closeBtn.addEventListener("click", fecharModal);
window.addEventListener("click", function(event) {
  if (event.target == modal) {
    fecharModal();
  }
});

// Função para iniciar o arrastamento do botão
function iniciarArrastamento(event) {
  var isClickInsideButton = event.target === btnAntiStress;

  if (isClickInsideButton) {
    initialX = event.clientX - btnAntiStress.offsetLeft;
    initialY = event.clientY - btnAntiStress.offsetTop;
    isDragging = true;
  } else {
    isClick = true;
  }

  document.addEventListener("mousemove", moverBotao);
  document.addEventListener("mouseup", pararArrastamento);
}

// Função para mover o botão enquanto arrasta
function moverBotao(event) {
  if (isDragging) {
    event.preventDefault();

    var newX = event.clientX - initialX;
    var newY = event.clientY - initialY;

    btnAntiStress.style.left = newX + "px";
    btnAntiStress.style.top = newY + "px";
  }
}

// Função para parar o arrastamento do botão
function pararArrastamento() {
  if (isDragging) {
    isDragging = false;
    document.removeEventListener("mousemove", moverBotao);
    document.removeEventListener("mouseup", pararArrastamento);
  } else {
    isClick = false;
  }
}

// Adiciona o evento de iniciar arrastamento ao clicar no botão
btnAntiStress.addEventListener("mousedown", iniciarArrastamento);