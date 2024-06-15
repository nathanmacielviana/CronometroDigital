let timerInterval;
let running = false;
let totalSeconds = 0;

/*Inicação do cronometro contando os segundos */
function startTimer() {
  if (!running) {
    running = true;
    timerInterval = setInterval(updateTimer, 1000);
  }
}

/*Para a contagem */
function stopTimer() {
  running = false;
  clearInterval(timerInterval);
}

/*Reseta */
function resetTimer() {
  stopTimer();
  totalSeconds = 0;
  updateTimer();
}

/*Calcular e atualizar o tempo */
function updateTimer() {
  totalSeconds++;
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const hoursFormatted = formatTime(hours);
  const minutesFormatted = formatTime(minutes);
  const secondsFormatted = formatTime(seconds);

  document.getElementById('timer').textContent = `${hoursFormatted}:${minutesFormatted}:${secondsFormatted}`;
}

/*Formatação do tempo */
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}