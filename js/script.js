// Puxa ids do index.html
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

// Define a data que eu quero q ele conte a partir de hoje
const newYears = "30 oct 2022"; 


function countdown(){
  // declara variavel
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  // pega os resultados dados após e divide por mil
  const totalSeconds = (newYearsDate - currentDate) / 1000;

  // faz os calculos arredondados com Math.floor
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  // Usa as constantes dos ids lá de cima colocando um innerHTML 
  // q transforma em string o number para aparecer na tela do html
  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(mins);
  secondsEl.innerHTML = formatTime(seconds);
}

// Pega o resultado e se o tempo for menor doq 10 ele coloca uma string '0' na frente
function formatTime(time){
  return time < 10 ? `0${time}` : time;
}

// Executa a função
countdown();

// SetInterval seta um intervalo de tempo de atualização do script
setInterval(countdown, 1000);

// Modal

const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

// Para abrir e fechar a opacity do css
const toggleModal = () => {
  [modal, fade].forEach((el) => el.classList.toggle("hide"));
};

// forEach (onde para cada item do array ele executa uma ação, funciona como for soq de uma forma melhor)
[openModalButton, closeModalButton, fade].forEach((el) => {
  el.addEventListener("click", () => toggleModal());
})

