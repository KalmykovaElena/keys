const removeTransition = (e) => {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("transform");
};
const playSound = (event) => {
  // console.log(event);
  const button = document.querySelector(`div[data-key='${event.keyCode}']`);
  const audio = document.querySelector(`audio[data-key='${event.keyCode}']`);

  if (!audio) return; //чтобы не было ошибки если аудио еще не загрузилось, а кнопка уже нажата
  button.classList.add("transform"); // добавляем класс к диву в html
  audio.currentTime = 0; // обнуляем время проигрывания, чтобы при повторном нажатии музыка воспроизвелась опять
  audio.play();
};

const keys = document.querySelectorAll(".key");
console.log(keys);
keys.forEach((el) => el.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound); // в функцию ничего не передаем
