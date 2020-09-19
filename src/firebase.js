import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDli7NAf0AlO8HP6jOI7hmsYXNiS0aUcrY",
    authDomain: "instagram-clone-react-28e0e.firebaseapp.com",
    databaseURL: "https://instagram-clone-react-28e0e.firebaseio.com",
    projectId: "instagram-clone-react-28e0e",
    storageBucket: "instagram-clone-react-28e0e.appspot.com",
    messagingSenderId: "933452068325",
    appId: "1:933452068325:web:936b466a67017036396b0c",
    measurementId: "G-QG6F7N9XSR"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };



//export default db;