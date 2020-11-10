import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAJb1G6Lr0bxJ_rd1gslWdRBskrddZIx9w",
    authDomain: "notify-7fe93.firebaseapp.com",
    databaseURL: "https://notify-7fe93.firebaseio.com",
    projectId: "notify-7fe93",
    storageBucket: "notify-7fe93.appspot.com",
    messagingSenderId: "1080158533425",
    appId: "1:1080158533425:web:d57de8c8b8bf4f99d32210",
    measurementId: "G-CWRPGPJGKJ"
  };


firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.usePublicVapidKey(
    "BOJVl62PixSyC2vuO1QbdsBj6n5hnPK_U2XEOdLCKX-DxmVQx_kJfj8jVcPT8B_VqPJz0WtJvCtq29l0WxtfTWc"
);

// messaging.onMessage((payload) => console.log('Message received. ', payload));

// messaging.setBackgroundMessageHandler(function(payload) {
//     console.log('[firebase-messaging-sw.js] Received background message ', payload);
//     // Customize notification here
//     const notificationTitle = payload.data.title;
//     const notificationOptions = {
//       body: payload.data.body,
//     };
  
//     return self.registration.showNotification(notificationTitle,
//       notificationOptions);
// });
// export const notificationInit = () => {
//     messaging.requestPermission()
//     .then(async () => {
//         const token = await messaging.getToken();
//     })
//     .catch(function(err) {
//         console.log("Unable to get permission to notify.", err);
//     });
  
// }

export const requestPermission = () => {
    console.log('Requesting permission...');
    // [START request_permission]
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        console.log('Notification permission granted.');
        // TODO(developer): Retrieve an Instance ID token for use with FCM.
        // [START_EXCLUDE]
        // In many cases once an app has been granted notification permission,
        // it should update its UI reflecting this.
        messaging.getToken().then((currentToken) => {
            if (currentToken) {
                console.log(currentToken);


            //   sendTokenToServer(currentToken);
            //   updateUIForPushEnabled(currentToken);
            } else {
              // Show permission request.
              console.log('No Instance ID token available. Request permission to generate one.');
              // Show permission UI.
            //   updateUIForPushPermissionRequired();
            //   setTokenSentToServer(false);
            }
          }).catch((err) => {
            console.log('An error occurred while retrieving token. ', err);
            // showToken('Error retrieving Instance ID token. ', err);
            // setTokenSentToServer(false);
        });
        // [END_EXCLUDE]
      } else {
        console.log('Unable to get permission to notify.');
      }
    });
    // [END request_permission]
}