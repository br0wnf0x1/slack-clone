import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlY3FBniTHYNIce4_Ea3WBJ6lgZrJxQ5g",
  authDomain: "slack-clone-8e4a3.firebaseapp.com",
  projectId: "slack-clone-8e4a3",
  storageBucket: "slack-clone-8e4a3.appspot.com",
  messagingSenderId: "422193163986",
  appId: "1:422193163986:web:15b231c863b0aab516070b",
  measurementId: "G-FGCQYTCZ7H",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
