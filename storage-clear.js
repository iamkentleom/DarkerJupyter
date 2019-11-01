function handleRemoved(tabId, removeInfo) {
    // tabId, removeInfo.windowId ,removeInfo.isWindowClosing
    browser.storage.local.remove(tabId.toString())
  }
  
  browser.tabs.onRemoved.addListener(handleRemoved);