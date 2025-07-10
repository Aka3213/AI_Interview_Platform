
import { initializeApp,getApps,getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";  

const firebaseConfig = {
  apiKey: "AIzaSyC_dUWyY1tqV2WxE9GBVe_U-bAnc3alBdI",
  authDomain: "prepwise-2d732.firebaseapp.com",
  projectId: "prepwise-2d732",
  storageBucket: "prepwise-2d732.firebasestorage.app",
  messagingSenderId: "294136634386",
  appId: "1:294136634386:web:cc6b22faf9ca739dba4ccb",
  measurementId: "G-R9RFKSTGRH"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
