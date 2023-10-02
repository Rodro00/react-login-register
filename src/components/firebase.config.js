// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD53ekmPR8snGjgnA5oi2fbq0TjuRc4lEg",
  authDomain: "react-login-register-b9b76.firebaseapp.com",
  projectId: "react-login-register-b9b76",
  storageBucket: "react-login-register-b9b76.appspot.com",
  messagingSenderId: "686052914088",
  appId: "1:686052914088:web:f4912c41a66d4ab718e39d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;