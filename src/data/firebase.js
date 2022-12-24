import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAPl__MPeprcoqw1Aax22t5cSsbTMAF4tM",
  authDomain: "blogdom-15f9c.firebaseapp.com",
  projectId: "blogdom-15f9c",
  storageBucket: "blogdom-15f9c.appspot.com",
  messagingSenderId: "1007531187810",
  appId: "1:1007531187810:web:8318915bbbe5c12df7bb3b",
  measurementId: "G-DMYLLQJPTR",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

const GoogleAuth = async () => {
  try {
    const res = await signInWithPopup(auth, provider);
    return res.user;
  } catch (error) {
    throw error;
  }
};

const MicrosoftAuth = async () => {
  try {
  } catch (error) {
    throw error;
  }
};

const AppleAuth = async () => {
  try {
  } catch (error) {
    throw error;
  }
};

export { auth, GoogleAuth };
