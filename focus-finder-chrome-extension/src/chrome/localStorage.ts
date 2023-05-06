export const setLocalStorage = async (value:{ [key: string]: string} ) => {
  await chrome.storage.local.set(value)
}
export const getLocalStorage = async ( key: string ) => {
  await chrome.storage.local.get([key])
}
