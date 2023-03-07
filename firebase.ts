import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "chatgpt-clone-f6c77.firebaseapp.com",
  projectId: "chatgpt-clone-f6c77",
  storageBucket: "chatgpt-clone-f6c77.appspot.com",
  messagingSenderId: "92134361524",
  appId: "1:92134361524:web:0098ab052fcd98d1930ae1",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const db = getFirestore(app);
