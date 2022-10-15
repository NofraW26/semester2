let trailer = document.getElementById("trailer");
let play = document.getElementById("play");
let pause = document.getElementById("pause");

play.style.display = "none";

function button() {
  if (trailer.paused) {
    trailer.play();
    play.style.display = "none";
    pause.style.display = "block";
  } else {
    trailer.pause();
    play.style.display = "block";
    pause.style.display = "none";
  }
}
