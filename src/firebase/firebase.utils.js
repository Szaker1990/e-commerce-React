import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyAnuOHGEv_2sTLD37GNzOm57bUWVM07b7U",
    authDomain: "e-commerce-react-538a7.firebaseapp.com",
    databaseURL: "https://e-commerce-react-538a7.firebaseio.com",
    projectId: "e-commerce-react-538a7",
    storageBucket: "e-commerce-react-538a7.appspot.com",
    messagingSenderId: "527156522678",
    appId: "1:527156522678:web:9971c7e90d2ccf7a670017"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;