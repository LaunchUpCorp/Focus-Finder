import trackData from "./trackData";


const main = () => {
  // Authorization flow
  // if(!checkAuthorization()){
  //   return
  // }
  // Tracking Updated Tabs and closed Tabs
  trackData();
};
main();

/*
 * # Authgate service before tracking the user's browser
 *  1. Check chrome extension storage for any tokens, this will check if user is authenticated
 *  2. Start tracking the user's chrome tabs. Think of a data structure to use.
 *  3. On update or close: There should be a time stamp beginning and end of url lifetime or tab lifetime. ( mostly tracking time on url )
 *  4. Send data to backend every update happening to chrome tab.
 *  5. appolo graphql is still viable with vanilla js/ts without react client.
 */
