export async function queryTabs(query: chrome.tabs.QueryInfo) {
  const [tab] = await chrome.tabs.query(query);
  return tab;
}

export async function queryTabsById(tabId: number) {
  const tab = await chrome.tabs.get(tabId);
  return tab
}
