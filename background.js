function fbMain(tabUrl) {
	var notice = false;

	if ((tabUrl.match("https://www.facebook.com/")) || (tabUrl.match("http://www.facebook.com/"))) {
		notice = true;
	}

	return notice;
}


function loadEvent(tab) {
	if (fbMain(tab.url)) {
		chrome.tabs.executeScript(tab.tabID, {file: "event.js"});
	}
}


// tab listeners to know when to fire the event script

chrome.tabs.onActivated.addListener(function(activeInfo) {
  chrome.tabs.get(activeInfo.tabId, function(tab) {
    loadEvent(tab);
  });
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (fbMain(tab.url)) {
    chrome.tabs.executeScript(tabId, {file: "event.js"});
  }
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (fbMain(request.tabs_host) === true) {
      sendResponse(true);
    } else {
      icon_path = request.default_icon_path;
      sendResponse(false)
    }
  }
);

