importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js');

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
