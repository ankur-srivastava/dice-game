var randomNumber1 = Math.round((Math.random() * 6));
var randomNumber2 = Math.round((Math.random() * 6));

if(randomNumber1 === 0) {
  randomNumber1 = Math.round((Math.random() * 6));
}

if(randomNumber2 === 0) {
  randomNumber2 = Math.round((Math.random() * 6));
}

if(randomNumber1 > randomNumber2) {
  document.querySelector(".winnerName").textContent = "Player 1 is the Winner";
} else if(randomNumber2 > randomNumber1) {
  document.querySelector(".winnerName").textContent = "Player 2 is the Winner";
} else {
  document.querySelector(".winnerName").textContent = "Draw";
}

var imageName1 = `images/dice${randomNumber1}.png`;
var imageName2 = `images/dice${randomNumber2}.png`;

console.log(`Got ${imageName1} and ${imageName2}`);

document.querySelector('.img1').setAttribute("src", imageName1);
document.querySelector('.img2').setAttribute("src", imageName2);
