/* eslint-disable no-undef */
// Scripts for firebase and firebase messaging
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyDbiLGfK4Rht-P3Zdk7I-KLAe1jXwTBcT4",
  authDomain: "remider-2fac5.firebaseapp.com",
  projectId: "remider-2fac5",
  storageBucket: "remider-2fac5.appspot.com",
  messagingSenderId: "4064172964",
  appId: "1:4064172964:web:56f4811beb82f63ceeff31",
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  this.registration.showNotification(notificationTitle, notificationOptions);
});
