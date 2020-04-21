
function handleMessage(request, sender, sendResponse) {
    console.log("Message from the background script: " +
      request.selected);
    document.getElementById("back-card-text").value = request.selected;
    document.getElementById("source-url-value").value = request.url;
    sendResponse({response: "Response from background script"});
  }

  function handelCreate() {
    var id_time = Date.now();
    var front = document.getElementById("front-card-text").value;
    var back = document.getElementById("back-card-text").value;
    var url = document.getElementById("source-url-value").value;
    console.log("id: "+ id_time);
    console.log("front: "+ front);
    console.log("back: "+ back);
    console.log("url: "+ url);
 }

browser.runtime.onMessage.addListener(handleMessage);

document.getElementById("creat-card").addEventListener("click", function () {
    handelCreate()
  });

