function clickHandler(e) {
buttonPress(e);
  switch (e) {
    case "w":
      audio("crash");
      break;
    case "a":
      audio("kick-bass");
      break;
    case "s":
      audio("snare");
      break;
    case "d":
      audio("tom-1");
      break;
    case "j":
      audio("tom-2");
      break;
    case "k":
      audio("tom-3");
      break;
    case "l":
      audio("tom-4");
      break;
    default:
      console.log(e);
      break;
  }
}

function audio(drum) {
  var audio = new Audio("sounds/" + drum + ".mp3");
  audio.play();
}

function buttonPress (key) {
    document.querySelector('.'+key).classList.add('pressed')
    setTimeout(()=> document.querySelector('.'+key).classList.remove('pressed'), 100)
}

document
  .querySelectorAll(".drum")
  .forEach(() => addEventListener("click", (e) => clickHandler(e.target.innerHTML)));

document
  .querySelectorAll(".drum")
  .forEach(() => addEventListener("keydown", (e) => clickHandler(e.key)));
