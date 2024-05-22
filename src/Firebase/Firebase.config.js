// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBs7Zb5YL_LEMdkSPbwS0YHFBpn883IHrM",
  authDomain: "user-email-password-auth-43ff6.firebaseapp.com",
  projectId: "user-email-password-auth-43ff6",
  storageBucket: "user-email-password-auth-43ff6.appspot.com",
  messagingSenderId: "138944296781",
  appId: "1:138944296781:web:9e55fb69992d2468f8e904"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;