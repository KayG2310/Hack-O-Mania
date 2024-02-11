// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyApuJZC20MRhQzshpMiXZNtM_I7qyEUkyU",
    authDomain: "farmcom-413917.firebaseapp.com",
    projectId: "farmcom-413917",
    storageBucket: "farmcom-413917.appspot.com",
    messagingSenderId: "463061230479",
    appId: "1:463061230479:web:ab400940c183721b6de1fa",
    measurementId: "G-8082LZC6KW"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();