import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB753MptNMHIRsciy5daWfJTd4PEjkRVHs",
  authDomain: "shutup-83956.firebaseapp.com",
  projectId: "shutup-83956",
  storageBucket: "shutup-83956.appspot.com",
  messagingSenderId: "28036984247",
  appId: "1:28036984247:web:6183b30e29c133759b4c32",
  measurementId: "G-Y2E24YM197"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);

export{fireDB}