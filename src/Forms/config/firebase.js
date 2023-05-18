import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAthz6fV1Plh6GqvKeYxVWnAmsxfMyMPsk",
  authDomain: "landing-page-c8e30.firebaseapp.com",
  databaseURL: "https://landing-page-c8e30-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "landing-page-c8e30",
  storageBucket: "landing-page-c8e30.appspot.com",
  messagingSenderId: "199828252857",
  appId: "1:199828252857:web:d478fbe5b83c385ddf5368"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
export const quickForm = collection(db, 'quick-form');
export const freeForm = collection(db, 'free-form');
export const paidForm = collection(db, 'paid-form');
export const scholarshipForm = collection(db, 'scholarship-form');
