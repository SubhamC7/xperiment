import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { initializeApp } from "firebase/app";
import { onBackgroundMessage } from "firebase/messaging/sw";

export const firebaseNotification = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyCitoMcZfDoYggxi6XVPlkNUGKchJufSJY",
    authDomain: "localcommerce-2b5a3.firebaseapp.com",
    projectId: "localcommerce-2b5a3",
    storageBucket: "localcommerce-2b5a3.appspot.com",
    messagingSenderId: "832219461336",
    appId: "1:832219461336:web:e2cd2eb354fa7028f709ad",
    measurementId: "G-9PCJED33FG",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const messaging = getMessaging();
  getToken(messaging, {
    vapidKey:
      "BInnvrPjaruJ_BLf_JVOM6zposFgYkHQEdL4rZLr3LgqPkNU7bdbEV0r3EwsWxKPN-QhkBQ0-t8K6gXnzRYQlyY",
  })
    .then((currentToken) => {
      if (currentToken) {
        // Send the token to your server and update the UI if necessary
        // ...
        // console.log(currentToken);
      } else {
        // Show permission request UI
        // console.log(
        //   "No registration token available. Request permission to generate one."
        // );
        // ...
      }
    })
    .catch((err) => {
      // console.log("An error occurred while retrieving token. ", err);
      // ...
    });
  onMessage(messaging, (payload) => {
    // console.log("Message received. ", payload);
    // ...
  });
};
