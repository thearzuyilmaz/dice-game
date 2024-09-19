function dicing() {

  var random1 = Math.floor(Math.random() * 6) + 1;
  var random2 = Math.floor(Math.random() * 6) + 1;
  var diceLink1 = "./images/dice" + random1 + ".png";
  var diceLink2 = "./images/dice" + random2 + ".png";
  document.querySelector(".img1").setAttribute("src", diceLink1);
  document.querySelector(".img2").setAttribute("src", diceLink2);

  if (random1 > random2){
    document.querySelector("h1").innerHTML = "🏆 Player 1 Wins";
  } else if (random2 > random1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins 🏆";
  } else {
    document.querySelector("h1").innerHTML = "Draw";
  }

  return [diceLink1, diceLink2];

}

window.onload = dicing;



