// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGI0JrzVqcVB3MSJv5_iE0-J9_AoJsm8Q",
  authDomain: "group-loyalty.firebaseapp.com",
  projectId: "group-loyalty",
  storageBucket: "group-loyalty.appspot.com",
  messagingSenderId: "379548747169",
  appId: "1:379548747169:web:6992afdd5a6ae445dcb7e0",
  measurementId: "G-P73146WL1G"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);