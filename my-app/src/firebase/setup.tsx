import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB6QfOAr_dX4_EEB6LZJZFT2wBiYNsHix4",
  authDomain: "olx-clone-376f1.firebaseapp.com",
  projectId: "olx-clone-376f1",
  storageBucket: "olx-clone-376f1.firebasestorage.app",
  messagingSenderId: "361776295551",
  appId: "1:361776295551:web:9ec233c3651aa7fbe5194a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
