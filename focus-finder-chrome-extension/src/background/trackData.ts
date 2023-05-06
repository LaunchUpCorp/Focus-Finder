import { queryTabs, queryTabsById } from '../chrome/tabs';
import {
  chromeTabs,
  trackingData,
  uploadData,
  updateData,
  getDomain
} from './utils';

function trackData() {
  chrome.tabs.onHighlighted.addListener(async () => {
    console.log('tab changed');
    const query = { active: true, lastFocusedWindow: true };
    const { url, id } = await queryTabs(query);
    const domain = getDomain(url as string);
    if (!trackingData.start) {
      updateData(trackingData, id as number, domain);
    }
  });
  chrome.tabs.onUpdated.addListener(async () => {
    const query = { active: true, lastFocusedWindow: true };
    const { url, id } = await queryTabs(query);
    const domain = getDomain(url as string);
    if (trackingData.domain !== domain && trackingData.start) {
      uploadData(trackingData);
      console.log(chromeTabs);
    }
    if (!trackingData.start) {
      updateData(trackingData, id as number, domain);
    }
  });
  chrome.tabs.onRemoved.addListener(async () => {
    if (trackingData.start) {
      uploadData(trackingData);
      console.log(chromeTabs);
    }
  });
  chrome.idle.onStateChanged.addListener(async (newState) => {
    console.log(newState);
    const { url, id } = await queryTabsById(trackingData.chromeTabId as number);
    const domain = getDomain(url as string);
    if (newState !== 'active' && trackingData.start) {
      uploadData(trackingData);
      console.log(chromeTabs);
    }
    if (newState === 'active' && !trackingData.start) {
      console.log('Active again');
      updateData(trackingData, id as number, domain);
      console.log(chromeTabs);
    }
  });
}
export default trackData;
