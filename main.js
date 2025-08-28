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

    // finding the title , number , timezone 
    const findParent = this.closest(".card");
    const cardTitle = findParent.querySelector("h1").innerText;
    const emergencyNumber = findParent.querySelector("h2").innerText;
    const date = new Date().toLocaleTimeString();

    // alert message 
    alert("calling " + cardTitle + " " + emergencyNumber + "...");
    // coin counting 
    const coinCountcontainer = document.getElementById("coin-count");
    let coinCount = parseInt(coinCountcontainer.innerText);
    coinCount -= 20;
    coinCountcontainer.innerText = coinCount;



    

    console.log(cardTitle, emergencyNumber, date);

    if (coinCount <= 0) {
      finishCoins = true;
    }
  });
}
