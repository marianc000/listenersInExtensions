function onInstalled() {
    console.log(">onInstalled");
    chrome.action.onClicked.addListener(onClicked);
};

function onClicked() {
    console.log(">onClicked");
};

chrome.runtime.onInstalled.addListener(onInstalled);