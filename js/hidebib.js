// Hide/show bibliography entries
function toggleBib(bibID) {
  var element = document.getElementById(bibID);
  if (element.style.display === "block") {
    element.style.display = "none";
  } else {
    element.style.display = "block";
  }
}
