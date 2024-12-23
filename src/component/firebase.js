// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth }from "firebase/auth"
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyD9z6L2yRXcN5UP6N_HoRpppbcdYS0b0Ko",
  authDomain: "resume-maker-ee8d7.firebaseapp.com",
  projectId: "resume-maker-ee8d7",
  storageBucket: "resume-maker-ee8d7.firebasestorage.app",
  messagingSenderId: "258007932809",
  appId: "1:258007932809:web:9a65df747528262caa8b58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth()
export const db = getFirestore(app)
export default app