document.body.style.border = "20px solid pink "
console.log("DAG")

var xmlHttp = null;

xmlHttp = new XMLHttpRequest();
xmlHttp.open( "GET", chrome.extension.getURL ("modal.html"), false );
xmlHttp.send( null );

var inject  = document.createElement("div");
inject.innerHTML = xmlHttp.responseText
document.body.insertBefore (inject, document.body.firstChild);