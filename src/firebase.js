// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyChy3LcvXH_lvrlFXPgtVXQEHFfaFmp484",
    authDomain: "zoopla-ac345.firebaseapp.com",
    projectId: "zoopla-ac345",
    storageBucket: "zoopla-ac345.appspot.com",
    messagingSenderId: "1078338040058",
    appId: "1:1078338040058:web:cd227c2898cc2fe73d1943"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);