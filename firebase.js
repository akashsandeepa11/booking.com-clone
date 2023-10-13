import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAtZaX4TRLJEjbXcZgnGs2wGlV5w9IjI0I",
  authDomain: "booking-project-d6a73.firebaseapp.com",
  projectId: "booking-project-d6a73",
  storageBucket: "booking-project-d6a73.appspot.com",
  messagingSenderId: "253666504460",
  appId: "1:253666504460:web:4d7bed0e95a78c5397a329",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export { auth, db };
