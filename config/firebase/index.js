import firebase from "firebase/app";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGEGING_SENDER_ID,
  appId: process.env.APP_ID,
};

const app = firebase.apps.length
  ? firebase.app()
  : firebase.initializeApp(firebaseConfig);

export default app;
