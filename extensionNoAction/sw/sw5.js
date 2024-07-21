console.log('>executing sw5.js at ' + Date.now()); 

chrome.tabs.onZoomChange.addListener(o=>console.log('>onZoomChange',o.newZoomFactor));