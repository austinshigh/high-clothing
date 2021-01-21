import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



const config = {
    apiKey: "AIzaSyAcINa-OtZ4B2wh6uDhdQUoWzsf0JVOgUY",
    authDomain: "high-db.firebaseapp.com",
    projectId: "high-db",
    storageBucket: "high-db.appspot.com",
    messagingSenderId: "1080516799426",
    appId: "1:1080516799426:web:57c36ef984b35a56cac45b",
    measurementId: "G-F87H3HLC40"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;