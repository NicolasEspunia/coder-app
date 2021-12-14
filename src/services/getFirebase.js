

import firebase from 'firebase/app';
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyDlay_0vvMM3I0TECwNce61aOsast4RC44",
    authDomain: "coderhardware.firebaseapp.com",
    projectId: "coderhardware",
    storageBucket: "coderhardware.appspot.com",
    messagingSenderId: "284452309685",
    appId: "1:284452309685:web:a5f0f234ef9fcf43bfccfc",
    measurementId: "G-G0S3F675BP"
    
};

const app = firebase.initializeApp(firebaseConfig);


export default function getFirestore(){
    return firebase.firestore(app)
}