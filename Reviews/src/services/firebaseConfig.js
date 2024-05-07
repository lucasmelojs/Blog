import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCCnzv119zmeYFgZ4KhAyVE04EPvfWqsIE",
    authDomain: "blog-reviews-9d131.firebaseapp.com",
    projectId: "blog-reviews-9d131",
    storageBucket: "blog-reviews-9d131.appspot.com",
    messagingSenderId: "671913379445",
    appId: "1:671913379445:web:49e9ccd7d7090c79abda3c"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app)