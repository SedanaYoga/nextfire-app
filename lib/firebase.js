import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getStorage} from 'firebase/storage'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAK0qjVkevcgU_sL1Qci-QetHICXOjWfzQ",
  authDomain: "nextfire-38c96.firebaseapp.com",
  projectId: "nextfire-38c96",
  storageBucket: "nextfire-38c96.appspot.com",
  messagingSenderId: "785996105762",
  appId: "1:785996105762:web:4ab37244c691843ceaa27b",
  measurementId: "G-9VQQPMZ55P"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const storage = getStorage(app)
export const firestore = getFirestore(app)