// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/app';
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkCTFIIFPqV6F78j3Mixr0mhUXFvF9Stk",
  authDomain: "foodie-70789.firebaseapp.com",
  projectId: "foodie-70789",
  storageBucket: "foodie-70789.appspot.com",
  messagingSenderId: "228765334765",
  appId: "1:228765334765:web:48aae32d157eeb14aba0e4",
  measurementId: "G-09M73WY8W4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);