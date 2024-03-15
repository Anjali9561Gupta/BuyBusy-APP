// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBs90ML6aoc5g66oYdiQcr0q5BOtt9Hx4",
  authDomain: "buy-busy-app-35c55.firebaseapp.com",
  projectId: "buy-busy-app-35c55",
  storageBucket: "buy-busy-app-35c55.appspot.com",
  messagingSenderId: "1056081532910",
  appId: "1:1056081532910:web:a4fc8d773cf59c6d5fe0ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);