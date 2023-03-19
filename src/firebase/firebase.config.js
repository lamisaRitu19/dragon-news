// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBPdhUyHZsCxmd5Vpw79lzalpBv-7M4LBI",
    authDomain: "dragon-news-4ab74.firebaseapp.com",
    projectId: "dragon-news-4ab74",
    storageBucket: "dragon-news-4ab74.appspot.com",
    messagingSenderId: "956829960247",
    appId: "1:956829960247:web:77e1a222d37a14aa8797b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;