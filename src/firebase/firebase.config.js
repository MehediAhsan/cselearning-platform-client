// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-t_grxBZHZAEnawFmjVXtCFIQ2n5LDR4",
  authDomain: "cselearning-platform.firebaseapp.com",
  projectId: "cselearning-platform",
  storageBucket: "cselearning-platform.appspot.com",
  messagingSenderId: "93076977785",
  appId: "1:93076977785:web:a4825b3a79504950db7ca8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;