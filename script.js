document.addEventListener("DOMContentLoaded", function() {
  var movingText = document.getElementById("movingText");
  var screenWidth = window.innerWidth;
  var animationDuration = 5000; // 5 seconds

  function moveText() {
    movingText.style.transition = "none";
    movingText.style.left = screenWidth + "px";

    // Trigger reflow
    movingText.offsetWidth;

    movingText.style.transition = "left " + animationDuration / 1000 + "s linear";
    movingText.style.left = "0";
  }

  setInterval(moveText, animationDuration);
});