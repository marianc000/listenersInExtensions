console.log('>1', chrome.action.onClicked.hasListener(onClicked));

function onClicked() {
    console.log(">onClicked", chrome.action.onClicked.hasListener(onClicked));
};

chrome.action.onClicked.addListener(onClicked);

console.log('>2', chrome.action.onClicked.hasListener(onClicked));