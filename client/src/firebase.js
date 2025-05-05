import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDf4_rldd8D6884-fh_pAFIEHAwbPMC1BQ",
    authDomain: "writepad-f8afc.firebaseapp.com",
    projectId: "writepad-f8afc",
    storageBucket: "writepad-f8afc.firebasestorage.app",
    messagingSenderId: "10819091778",
    appId: "1:10819091778:web:c6cb801e534f50dc41dcdb"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
