let c;

console.log('>executing sw6.js at ' + Date.now(), c);

function onClicked() {
    c = ++c || 1;
    console.log(">onClicked", c);
};

chrome.action.onClicked.addListener(onClicked);