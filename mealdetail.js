console.log("kaise ho bhai??");

function getUrlParameter(name) {
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(window.location.href);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
var data = getUrlParameter("data");
var dataDisplay = document.getElementById("dataDisplay");
dataDisplay.textContent = data;

var myVariable = "afu";
document.getElementById("thumbnail").innerText = myVariable;
