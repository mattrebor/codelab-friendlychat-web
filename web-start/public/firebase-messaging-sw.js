importScripts('/__/firebase/7.22.1/firebase-app.js');
importScripts('/__/firebase/7.22.1/firebase-messaging.js');
importScripts('/__/firebase/init.js');

console.log("firebase-messaging-sw.js");
if (firebase.messaging.isSupported) {
    firebase.messaging();
}

