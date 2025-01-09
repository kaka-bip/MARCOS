function updateClock() {
  const clockElement = document.querySelector(".clock");
  const now = new Date();
  
  // Obtendo as horas, minutos e segundos
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Adicionando zero na frente se for menor que 10
  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;

  // Atualizando o conteúdo do relógio
  clockElement.textContent = hours + ":" + minutes + ":" + seconds;
}

// Atualiza o relógio a cada segundo
setInterval(updateClock, 1000);
updateClock();