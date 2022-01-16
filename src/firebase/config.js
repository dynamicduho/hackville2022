import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCKCtpbWt3xQV9r_n0IG3u9n6XoIKL757E",
    authDomain: "hv2022-e4283.firebaseapp.com",
    projectId: "hv2022-e4283",
    storageBucket: "hv2022-e4283.appspot.com",
    messagingSenderId: "472997700914",
    appId: "1:472997700914:web:34bee98b8a3b883a96e32b"
  };

  //init firebase
  firebase.initializeApp(firebaseConfig)

  //init services
  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()
  const projectStorage = firebase.storage()

  //timestamp
  const timestamp = firebase.firestore.Timestamp

  export { projectFirestore, projectAuth, timestamp, projectStorage }