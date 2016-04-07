chrome.browserAction.onClicked.addListener(function copyToClipboard(elementId) {
  var temp = document.createElement("input");
  temp.setAttribute("value", "₹");
  document.body.appendChild(temp);
  temp.select();
  document.execCommand("copy");
  document.body.removeChild(temp);
});