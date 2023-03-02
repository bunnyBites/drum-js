const audioFileArr = ["crash", "kick-bass", "snare", "tom-1", "tom-2", "tom-3", "tom-4"];

document.querySelectorAll("button").forEach((btnElement, index) => {
  btnElement.addEventListener("click", () => {
    btnElement.style.color = "#0000FF";
    btnAnimate(btnElement);

    const audio = new Audio(`sounds/${audioFileArr[index]}.mp3`);
    audio.play();
  })
})

document.addEventListener("keydown", (event) => {
  btnAnimate(document.querySelector("." + event.key));

  switch(event.key) {
    case "w":
      const crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "a":
      const kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "s":
      const snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "d":
      const tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "j":
      const tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "k":
      const tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "l":
      const tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    default:
      break;
  }
})

const btnAnimate = (element) => {
  element.classList.add("pressed");

  setTimeout(() => element.classList.remove("pressed"), 100);
}