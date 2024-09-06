// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0-SwjC9r4kb3ctxId4qeYxizxxLnq3ls",
  authDomain: "estate-9c310.firebaseapp.com",
  projectId: "estate-9c310",
  storageBucket: "estate-9c310.appspot.com",
  messagingSenderId: "927069801285",
  appId: "1:927069801285:web:db54b471b547c995c60c2c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth