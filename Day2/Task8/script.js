var click = 0;

function Counter() {
  click++;
  var displayArea = document.getElementById("displayArea");
  displayArea.textContent = "How many clicks: " + click;
}