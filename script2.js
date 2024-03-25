document.getElementById("button").addEventListener("click", function () {
  document.getElementById("text").innerText = "Hey";
});

document.getElementById("button1").addEventListener("click", function () {
  document.getElementById("colour").style.color = "Pink";
});

const hover = document.getElementById("hover");
hover.addEventListener("mouseover", respondMouseOut);
function respondMouseOut() {
  document.getElementById("watchMe").innerText = "yo";
}
