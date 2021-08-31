import firebase from "firebase/app";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdSLuGPWRfrZxs5Jvl9vuMyGbDlZtvPuI",
  authDomain: "clocker-f499d.firebaseapp.com",
  projectId: "clocker-f499d",
  storageBucket: "clocker-f499d.appspot.com",
  messagingSenderId: "201943566933",
  appId: "1:201943566933:web:f2f1d1de3c2e833016a2dc",
};

const app = firebase.apps.length
  ? firebase.app()
  : firebase.initializeApp(firebaseConfig);

export default app;
