import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
    apiKey: "AIzaSyCE3NvecZShJHdY04C-sVx2M2QM6m7HTRg",
    authDomain: "chat-tts-auth.firebaseapp.com",
    databaseURL: "https://chat-tts-auth-default-rtdb.firebaseio.com",
    projectId: "chat-tts-auth",
    storageBucket: "chat-tts-auth.appspot.com",
    messagingSenderId: "525544504469",
    appId: "1:525544504469:web:0d54ef22fdfbfce6d46f9c"
  };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app)
  export const fire = getFirestore(app);