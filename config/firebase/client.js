import firebaseClient from "firebase/app";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGEGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
};

const app = firebaseClient.apps.length
  ? firebaseClient.app()
  : firebaseClient.initializeApp(firebaseConfig);

export const persistenceMode = firebaseClient.auth.Auth.Persistence.LOCAL;

export { firebaseClient };
