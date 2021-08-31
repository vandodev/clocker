import firebase from "firebase/app";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};

export default firebase = firebase.apps.length
  ? firebase.app()
  : firebase.initializeApp(firebaseConfig);
