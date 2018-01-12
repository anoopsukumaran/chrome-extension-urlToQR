function getCurrentTabUrl(callback) {  
  var queryInfo = {
    active: true, 
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {
    var tab = tabs[0]; 
    var url = tab.url;
    callback(url);
  });
}

function renderURL(statusText) {
	  var newURL = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+statusText;
	  document.getElementById('status').innerHTML = "<img src="+newURL+"/>";
}

document.addEventListener('DOMContentLoaded', function() {
	getCurrentTabUrl(function(url) {
    renderURL(url); 
  });
});