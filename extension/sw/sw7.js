console.log('>executing sw7.js at ' + Date.now());

chrome.permissions.getAll()
    .then(o => chrome.storage.local.set({ a: 1 }))
    .then(o => chrome.action.onClicked.addListener(o =>
        console.log(">onClicked1")));

chrome.permissions.getAll()
    .then(o => chrome.action.onClicked.addListener(o =>
        console.log(">onClicked2")));

chrome.action.onClicked.addListener(o =>
    console.log(">onClicked3"));        