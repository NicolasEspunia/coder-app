// Import the functions you need from the SDKs you need
import firebase from "firebase";
import "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyDlay_0vvMM3I0TECwNce61aOsast4RC44",
  authDomain: "coderhardware.firebaseapp.com",
  projectId: "coderhardware",
  storageBucket: "coderhardware.appspot.com",
  messagingSenderId: "284452309685",
  measurementId: "G-G0S3F675BP",
  appId: "1:284452309685:web:a5f0f234ef9fcf43bfccfc"
};
const app = firebase.initializeApp(firebaseConfig)


export function getFirestore () {
    
    return firebase.firestore(app)
}
