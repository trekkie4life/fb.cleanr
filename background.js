function fbmain(tab_url) {
	var notice = false;

	if ((tab_url.match("https://www.facebook.com/")) || (tab_url.match("http://www.facebook.com/"))) {
		notice = true;
	}

	return notice;
}

function loadEvent(tab) {
	if (fbmain(tab.url)) {
		chrome.tabs.executeScript(tab.tabID, {file: "event.js"}, function(result){});
	}
}


// tab listeners to know when to fire the event script


chrome.tabs.onActivated.addListener(function(activeInfo) {
  chrome.tabs.get(activeInfo.tabId, function(tabObj) {
    loadEvent(tabObj);
  });
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (fbmain(tab.url)) {
    chrome.tabs.executeScript(tabId, {file: "event.js"}, function(result) {});
  }
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (fbmain(request.tabs_host) === true) {
      sendResponse(true);
    } else {
      icon_path = request.default_icon_path;
      sendResponse(false)
    }
  }
);

