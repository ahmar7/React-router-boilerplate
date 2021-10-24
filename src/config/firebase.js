import firebase from "firebase";
import "firebase/database";
import "firebase/auth";
var firebaseConfig = {
  apiKey: "AIzaSyBVDOA9Iruf9iZOhB44EiorpfOntDD1Ex4",
  authDomain: "reactfirebase-16a09.firebaseapp.com",
  projectId: "reactfirebase-16a09",
  storageBucket: "reactfirebase-16a09.appspot.com",
  messagingSenderId: "961822678205",
  appId: "1:961822678205:web:01e3ffed91cb51febb6bd4",
  measurementId: "G-E42Z5949RQ",
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
