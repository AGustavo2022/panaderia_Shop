// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0LhL5PXBltVMiJevQrnnv36U1YTU83NM",
  authDomain: "panaderias-shop-34740.firebaseapp.com",
  projectId: "panaderias-shop-34740",
  storageBucket: "panaderias-shop-34740.appspot.com",
  messagingSenderId: "468967338598",
  appId: "1:468967338598:web:7394c17f58ffa2f439b3a7"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default db;

