import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAsd1hKjhWosCUDInqhF807hrJe_ulPQx8",
    authDomain: "money-b7c30.firebaseapp.com",
    projectId: "money-b7c30",
    storageBucket: "money-b7c30.appspot.com",
    messagingSenderId: "1017015258508",
    appId: "1:1017015258508:web:07febbb3a596caa688daa9"
};

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

//timestamp
 const timestamp  = firebase.firestore.Timestamp

export {projectFirestore, projectAuth, timestamp}