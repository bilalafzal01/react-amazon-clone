import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCzp7grSuM4zOrpd7VWjhlhp7XHelNQSGI",
  authDomain: "clone-f1efc.firebaseapp.com",
  databaseURL: "https://clone-f1efc.firebaseio.com",
  projectId: "clone-f1efc",
  storageBucket: "clone-f1efc.appspot.com",
  messagingSenderId: "158043650666",
  appId: "1:158043650666:web:9ca936d4c1b6d9e0002813",
  measurementId: "G-113HQ5CCWB",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
