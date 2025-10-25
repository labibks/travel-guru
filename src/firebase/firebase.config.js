// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXG8th8e7uRFJliyTO0_PYfSGN8orVB-o",
  authDomain: "travel-guru-d9a0e.firebaseapp.com",
  projectId: "travel-guru-d9a0e",
  storageBucket: "travel-guru-d9a0e.firebasestorage.app",
  messagingSenderId: "616211015593",
  appId: "1:616211015593:web:6a6ec93f247eb6008a06b8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);