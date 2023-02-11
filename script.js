const happyBtn = document.querySelector("#happyBtn");
const sadBtn = document.querySelector("#sadBtn");
const emoji = document.querySelector("#emoji");

happyBtn.addEventListener("click", function() {
  emoji.innerHTML = "😊";
  emoji.style.display = "block";
});

sadBtn.addEventListener("click", function() {
  emoji.innerHTML = "😢";
  emoji.style.display = "block";
});
