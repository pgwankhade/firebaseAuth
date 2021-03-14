import firebase from 'firebase/app'
require('firebase/auth')
require('firebase/firestore')
require('firebase/database')
require('firebase/storage')

var config = {
    apiKey: "AIzaSyCNtlvE4ekGQ2sYC8Th7hFr1QS6q-Jflnw",
    authDomain: "fir-authuser-608f1.firebaseapp.com",
    projectId: "fir-authuser-608f1",
    storageBucket: "fir-authuser-608f1.appspot.com",
    messagingSenderId: "847800704937",
    appId: "1:847800704937:web:91b32dd839a53e9bbdeeb8",
    measurementId: "G-H3YP3V0EH3"
};
const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(config)
  : firebase.app();
export default firebaseApp;



