chrome.commands.onCommand.addListener(function(command) {
    chrome.tabs.query({url: "https://calendar.google.com/*"}, function(results) {
        if (results.length == 0) {
            chrome.tabs.create({url: 'https://calendar.google.com/'});
        } else {
            chrome.tabs.update(results[0].id, {highlighted: true});
            chrome.windows.update(results[0].windowId, {focused: true});
        }
    });
});