// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAqVt5KEZPxNQo3BINOIyXABEcNLyPoV2U",
    authDomain: "smy1-project.firebaseapp.com",
    projectId: "smy1-project",
    storageBucket: "smy1-project.appspot.com",
    messagingSenderId: "510334405291",
    appId: "1:510334405291:web:74113ada72e519142d05ee",
    measurementId: "G-HW7LVGEFZ4"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
export const firestore = getFirestore(app);
export default app;
