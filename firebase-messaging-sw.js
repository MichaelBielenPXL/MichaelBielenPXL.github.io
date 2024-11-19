importScripts(
  "https://www.gstatic.com/firebasejs/9.10.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.10.0/firebase-messaging-compat.js"
);

// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyDCiZTee8Lb__xZr2OeggZ8hxlIL1JHNAg",
  appId: "1:445814738513:ios:d3b6c6bd81ed9efd92b270",
  messagingSenderId: "445814738513",
  projectId: "boelguard",
  databaseURL:
    "https://boelguard-default-rtdb.europe-west1.firebasedatabase.app",
  storageBucket: "boelguard.appspot.com",
  iosBundleId: "com.example.boelguardsecurityApp",
});

// Necessary to receive background messages:
const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((m) => {
  console.log("onBackgroundMessage", m);
});
