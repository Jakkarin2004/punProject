import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA3pj2OnEp_a-R15Zw0vF7rHkpIbrc7fbk",
  authDomain: "air-conditioner-c11b6.firebaseapp.com",
  projectId: "air-conditioner-c11b6",
  storageBucket: "air-conditioner-c11b6.appspot.com",
  messagingSenderId: "810937273954",
  appId: "1:810937273954:web:13defdaea1e52c8af30b3b",
  measurementId: "G-G0D6HP5HCX"
};

if (!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}

export { firebase };