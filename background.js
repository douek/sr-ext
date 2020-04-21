
/*
Called when the item has been created, or when creation failed due to an error.
We'll just log success/failure here.
*/
function onCreated() {
    if (browser.runtime.lastError) {
      console.log(`Error: ${browser.runtime.lastError}`);
    } else {
      console.log("Item created successfully");
    }
  }
  
  /*
  Called when the item has been removed.
  We'll just log success here.
  */
  function onRemoved() {
    console.log("Item removed successfully");
  }
  
  /*
  Called when there was an error.
  We'll just log the error here.
  */
  function onError(error) {
    console.log(`Error: ${error}`);
  }
  
  /*
  Create all the context menu items.
  */
 browser.menus.create({
    id: "add_card_selection",
    title: browser.i18n.getMessage("menuAddCardSelection"),
    contexts: ["selection"],
  }, onCreated);

  browser.menus.create({
    id: "add_card_all",
    title: browser.i18n.getMessage("menuAddCard"),
    contexts: ["all"],
  }, onCreated);
  

  /*
  The click event listener, where we perform the appropriate action given the
  ID of the menu item that was clicked.
  */
  browser.menus.onClicked.addListener((info, tab) => {
    console.log(info)
    switch (info.menuItemId) {
      case "add_card_selection":
        console.log(info.selectionText);
        //browser.sidebarAction.open();
        //console.log("finish open side bar");
        sidebarMessage(info, tab)
        //console.log("after send message");
        break;
      case "add_card_all":
        console.log("Clickk");
        //browser.sidebarAction.open()
        browser.tab.create({url:"sidebar/sidebar.html"})
        break;
    }
  });
  
    /*
  The click event listener, where we perform the appropriate action given the
  ID of the menu item that was clicked.
  */
 browser.browserAction.onClicked.addListener((info) => {
    console.log(info)
    browser.pageAction.show()
  });

  function sidebarMessage(info) {
    var sending = browser.runtime.sendMessage({
        selected: info.selectionText,
        url: info.pageUrl
      });
    sending.then(handleResponse, handleError);  
  }

  function handleResponse(message) {
    console.log(`Message from the sidebar script:  ${message.response}`);
  }
  
  function handleError(error) {
    console.log(`Error: ${error}`);
  }


