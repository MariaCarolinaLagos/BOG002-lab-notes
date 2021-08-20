import firebase from "firebase/app"
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDYOcx9sXMZJ_QKV_l8U8jpVoXaGKqOU78",
    authDomain: "post-it-ln.firebaseapp.com",
    projectId: "post-it-ln",
    storageBucket: "post-it-ln.appspot.com",
    messagingSenderId: "876121110592",
    appId: "1:876121110592:web:f789ef720fbe07d0cc07a5"
};

//inicia el firebase

const fire = firebase.initializeApp(firebaseConfig);
const auth = fire.auth()
const google = new firebase.auth.GoogleAuthProvider()

export {auth, google}
