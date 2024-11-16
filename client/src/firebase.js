// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-b8854.firebaseapp.com",
  projectId: "mern-blog-b8854",
  storageBucket: "mern-blog-b8854.firebasestorage.app",
  messagingSenderId: "527923109818",
  appId: "1:527923109818:web:1d8e13ef5c919e5d80c783"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

