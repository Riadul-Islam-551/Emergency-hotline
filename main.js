// heart button functionality implementation
const heartButton = document.getElementsByClassName("card-heart");

for (const heart of heartButton) {
  heart.addEventListener("click", function () {
    const heartCountElement = document.getElementById("heart-count");
    let heartCount = parseInt(heartCountElement.innerText);
    heartCount++;
    heartCountElement.innerText = heartCount;
  });
}
// call button functionality
const cardCallButton = document.getElementsByClassName("card-call");
let finishCoins = false;
for (const callButton of cardCallButton) {
  callButton.addEventListener("click", function () {
    if (finishCoins) {
      alert("You don't have enough coin");
      return;
    }
    alert("calling");
    const coinCountcontainer = document.getElementById("coin-count");
    let coinCount = parseInt(coinCountcontainer.innerText);
    coinCount -= 20;
    coinCountcontainer.innerText = coinCount;
    if (coinCount <= 0) {
      finishCoins = true;
    }
    console.log(coinCount);
    console.log("button is clicked");
  });
}
