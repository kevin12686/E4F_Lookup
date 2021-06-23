chrome.runtime.onInstalled.addListener(function () {
    chrome.contextMenus.create({
        id: "e4f_context",
        title: "Lookup \"%s\" on E4F",
        contexts: ["selection"]
    });
});

chrome.contextMenus.onClicked.addListener((info, tabs) => {
    if (info.menuItemId === "e4f_context") {
        chrome.tabs.create({
            url: `https://english4formosa.com/dictionary/${info.selectionText}/`
        });
    }
});