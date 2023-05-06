// import { ApolloClient, gql, InMemoryCache } from "@apollo/client/core";
// import { setLocalStorage, getLocalStorage } from "../chrome/localStorage"
export const chromeTabs: ChromeTab[] = [];
export type ChromeTab = {
  chromeTabId: number | null | undefined;
  domain: string | null | undefined;
  start: Date | null | undefined;
  end: Date | null | undefined;
  userId: string;
};
export const trackingData: ChromeTab = {
  chromeTabId: undefined,
  domain: undefined,
  start: undefined,
  end: undefined,
  userId: '1'
};
export function updateData(
  referenceObj: ChromeTab,
  id: number,
  domain: string
) {
  referenceObj.chromeTabId = id;
  referenceObj.domain = domain;
  referenceObj.start = new Date();
}
export function uploadData(referenceObj: ChromeTab) {
  referenceObj.end = new Date();
  // graphql this but using array for now
  chromeTabs.push({ ...referenceObj });
  referenceObj.start = undefined;
}
export function getDomain(url: string) {
  const domain = url?.split('/')[2] as string;
  return domain;
}
