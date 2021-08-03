import Rebase from "re-base";
import firebase from "firebase/app";
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBUJsQGDTwGdCARpMGHIdfW7Szn-ZSF0FA",
    authDomain: "chatbox-app-26a26.firebaseapp.com",
    databaseURL: "https://chatbox-app-26a26-default-rtdb.europe-west1.firebasedatabase.app"
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base

