const playSound = (event) => {
  console.log(event);
  const button = document.querySelector(`div[data-key='${event.keyCode}']`);
  const audio = document.querySelector(`audio[data-key='${event.keyCode}]`);
  if (!audio) return; //чтобы не было ошибки если аудио еще не загрузилось, а кнопка уже нажата
  button.classList.add("play"); // добавляем класс к диву в html
  audio.currentTime = 0; // обнуляем время проигрывания, чтобы при повторном нажатии музыка воспроизвелась опять
  audio.play();
  console.log("OK");
};

window.addEventListener("keydown", playSound); // в функцию ничего не передаем
