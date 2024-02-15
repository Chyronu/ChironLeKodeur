document.addEventListener("DOMContentLoaded", function() {
  var movingText = document.getElementById("movingText");
  var screenWidth = window.innerWidth;
  var animationDuration = 10000; // 10 seconds

  function moveText() {
    movingText.style.transition = "none";
    movingText.style.left = screenWidth + "px";

    // Trigger reflow
    movingText.offsetWidth;

    movingText.style.transition = "left " + animationDuration / 4000 + "s linear";
    movingText.style.left = "0";
  }

  setInterval(moveText, animationDuration);
});

function logIn() {

  const logIn = document.getElementById("logIn").value ;
  const access = console.log(logIn.innerHTML) ;
}