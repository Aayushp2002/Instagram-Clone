import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBF70W2ERALd-bHPsguGk2JHG_kTloJgAo",
  authDomain: "instagram-clone-1c1e1.firebaseapp.com",
  projectId: "instagram-clone-1c1e1",
  storageBucket: "instagram-clone-1c1e1.appspot.com",
  messagingSenderId: "147992764674",
  appId: "1:147992764674:web:2520a1c0ba8fdaa127e21b",
  measurementId: "G-11V0Q7YKS6"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export {app, auth, firestore, storage};