// CONEXION a Backend firebase
// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD0VGH1Wld7QWdYuLcrmTA-d8nvZkZsK-8",
    authDomain: "newstagram-faf7f.firebaseapp.com",
    projectId: "newstagram-faf7f",
    storageBucket: "newstagram-faf7f.appspot.com",
    messagingSenderId: "141542539376",
    appId: "1:141542539376:web:c661a431fafd3c93edb4b5"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp( firebaseConfig ) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };