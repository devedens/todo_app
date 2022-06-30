import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGR0NIrwxNjZjHGJjdtNDZ9NlWe8skUt8",
  authDomain: "todo-crud-26cf7.firebaseapp.com",
  projectId: "todo-crud-26cf7",
  storageBucket: "todo-crud-26cf7.appspot.com",
  messagingSenderId: "188638242664",
  appId: "1:188638242664:web:a02b0a07a7c5f0068958dd",
  measurementId: "G-JFC1V08ZL1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
