const openTab = (query?: string) => {
  const toLang = "ja";
  const fromLang = "en";
  if (query) {
    chrome.tabs.create({
      url: `https://www.deepl.com/ja/translator#${toLang}/${fromLang}/${query}`,
    });
  }
};

chrome.runtime.onInstalled.addListener((): void => {
  chrome.contextMenus.create({
    id: "translate_it",
    title: "ここを翻訳！",
    contexts: ["selection"],
  });
});

chrome.contextMenus.onClicked.addListener((info, tab): void => {
  openTab(info.selectionText);
});
