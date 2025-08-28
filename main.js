const heartButton = document.getElementsByClassName("card-heart");

for (const heart of heartButton) {
  heart.addEventListener("click", function () {
    const heartCountElement = document.getElementById("heart-count");
    let heartCount = parseInt(heartCountElement.innerText);
    heartCount++;
    heartCountElement.innerText = heartCount;
  });
}
