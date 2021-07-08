chrome.runtime.onInstalled.addListener(function () {
    chrome.contextMenus.create({
        id: "dict_opts",
        title: "Lookup \"%s\" on ...",
        contexts: ["selection"]
    });
    chrome.contextMenus.create({
        parentId: "dict_opts",
        id: "e4f_context",
        title: "English4Formosa",
        contexts: ["selection"]
    });
    chrome.contextMenus.create({
        parentId: "dict_opts",
        id: "cambridge_context",
        title: "Cambridge Dictionary",
        contexts: ["selection"]
    });
    chrome.contextMenus.create({
        parentId: "dict_opts",
        id: "vocabulary.com",
        title: "Vocabulary.com",
        contexts: ["selection"]
    });
    chrome.contextMenus.create({
        parentId: "dict_opts",
        id: "dictionary.com",
        title: "DICTIONARY.COM",
        contexts: ["selection"]
    });
    chrome.contextMenus.create({
        parentId: "dict_opts",
        id: "thesaurus.com",
        title: "THESAURUS.COM",
        contexts: ["selection"]
    });
    chrome.contextMenus.create({
        parentId: "dict_opts",
        id: "merriam-webster",
        title: "Merriam-Webster",
        contexts: ["selection"]
    });
});

chrome.contextMenus.onClicked.addListener((info, tabs) => {
    if (info.menuItemId === "e4f_context") {
        chrome.tabs.create({
            url: `https://english4formosa.com/dictionary/${info.selectionText}/`
        });
    } else if (info.menuItemId === "cambridge_context") {
        chrome.tabs.create({
            url: `https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/${info.selectionText}/`
        });
    } else if (info.menuItemId === "vocabulary.com") {
        chrome.tabs.create({
            url: `https://www.vocabulary.com/dictionary/${info.selectionText}/`
        });
    } else if (info.menuItemId === "dictionary.com") {
        chrome.tabs.create({
            url: `https://www.dictionary.com/browse/${info.selectionText}/`
        });
    } else if (info.menuItemId === "thesaurus.com") {
        chrome.tabs.create({
            url: `https://www.thesaurus.com/browse/${info.selectionText}/`
        });
    } else if (info.menuItemId === "merriam-webster") {
        chrome.tabs.create({
            url: `https://www.merriam-webster.com/dictionary/${info.selectionText}/`
        });
    }
});