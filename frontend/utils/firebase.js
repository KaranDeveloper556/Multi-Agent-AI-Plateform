import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "multi-agent-ai-platform-58195.firebaseapp.com",
    projectId: "multi-agent-ai-platform-58195",
    storageBucket: "multi-agent-ai-platform-58195.firebasestorage.app",
    messagingSenderId: "417015270213",
    appId: "1:417015270213:web:4ed7b0b95ba37d340e8c2c",
    measurementId: "G-3BJBK51SXD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();