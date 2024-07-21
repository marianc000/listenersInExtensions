function onClicked() {
    console.log(">onClicked");
};

chrome.action.onClicked.addListener(onClicked);
chrome.action.onClicked.addListener(onClicked);
chrome.action.onClicked.addListener(onClicked);

chrome.action.onClicked.addListener(e => console.log(">onClicked2"));
chrome.action.onClicked.addListener(e => console.log(">onClicked2"));