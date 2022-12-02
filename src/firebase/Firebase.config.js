// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDxUoqb3lbWsv5sr4eStyye06S6jsrc1vI",
    authDomain: "hotel-vision.firebaseapp.com",
    projectId: "hotel-vision",
    storageBucket: "hotel-vision.appspot.com",
    messagingSenderId: "217852775679",
    appId: "1:217852775679:web:c8ecac6d20f010a84390ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;