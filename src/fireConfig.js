// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import getFirestore  from 'firebase/firestore';
// import getFirestore from "firebase/getFirestore"
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
const firebaseConfig = {
  apiKey: "AIzaSyA2HSdiefAgNpqPGQ6r71zTG0ygD1Pt_YU",
  authDomain: "firecommerce-3b679.firebaseapp.com",
  projectId: "firecommerce-3b679",
  storageBucket: "firecommerce-3b679.appspot.com",
  messagingSenderId: "514560677506",
  appId: "1:514560677506:web:2a6be43bfaa2ae93dcc69b",
  measurementId: "G-27T9GGCXTR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const fireDB =getFirestore(app)
export default fireDB 