const heartButton = document.getElementsByClassName("card-heart");
let callHistoryData = [];

//
//
//
//  heart button functionality implementation
for (const heart of heartButton) {
  heart.addEventListener("click", function () {
    const heartCountElement = document.getElementById("heart-count");
    let heartCount = parseInt(heartCountElement.innerText);
    heartCount++;
    heartCountElement.innerText = heartCount;
  });
}
//
//
//
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
    const currentTime = new Date().toLocaleTimeString();

    // alert message
    alert("Calling " + cardTitle + " " + emergencyNumber + "...");

    // coin counting
    const coinCountcontainer = document.getElementById("coin-count");
    let coinCount = parseInt(coinCountcontainer.innerText);
    coinCount -= 20;
    coinCountcontainer.innerText = coinCount;

    // call history data
    let data = {
      title: cardTitle,
      number: emergencyNumber,
      time: currentTime,
    };
    // push the data to the callHistoryData
    // callHistoryData.push(data);
    const callHistorySection = document.getElementById("call-history-section");
    const div = document.createElement("div");
    div.innerHTML = `
  <div class="flex justify-between items-center mt-5 p-3 bg-[#f8f8f8] rounded-lg">
                        <div class="">
                            <h1 class="font-bold text-sm">${data.title}</h1>
                            <p class="text-[#777777] text-xs">${data.number}</p>
                        </div>
                        <div>
                            <p class="text-xs w-[80px] ">${data.time}</p>
                        </div>
                    </div>
  `;
    callHistorySection.appendChild(div);
    // console.log(div);
    // console.log(callData);
    // console.log(cardTitle, emergencyNumber, currentTime, callHistoryData);

    if (coinCount <= 0) {
      finishCoins = true;
    }
  });
}

//
//
//
// clear button functionality of call-history section
document.getElementById("clear-button").addEventListener("click", function () {
  const clearCallHistory = document.getElementById("call-history-section");
  clearCallHistory.innerHTML = "";
});

//
//
//
// copy button functionality

const cardCopyBtn = document.getElementsByClassName("card-copy-btn");
for (const copyButton of cardCopyBtn) {
  copyButton.addEventListener("click", function () {
    let navCopyCountContainer = document.getElementById("nav-copy-count");
    let navCopyCount = parseInt(navCopyCountContainer.innerText);

    // get the EmergencyNumber of the copy button container part (.card)
    const copyParent = this.closest(".card");
    const copyEmergencyNum = copyParent.querySelector("h2").innerText;
    // copy the Emergency Number
    navigator.clipboard.writeText(copyEmergencyNum);
    // alert the emergencyNumber
    alert("Copy the Number: " + copyEmergencyNum);

    // copy count increasing
    navCopyCount++;
    navCopyCountContainer.innerText = navCopyCount;

    // console part
    // console.log(copyParent);
    // console.log(copyEmergencyNum);
    // console.log(navCopyCount);
    // console.log("button is clicked");
  });
}
