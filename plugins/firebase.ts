// ~/plugins/firebase.ts
import firebase from 'firebase/app'
import 'firebase/firestore'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyAkG1rgJwznlXZblQwKGF_DISoqr0QTZzk',
    authDomain: 'sample-hiroyuki001.firebaseapp.com',
    databaseURL: 'https://sample-hiroyuki001.firebaseapp.com',
    projectId: 'sample-hiroyuki001',
    storageBucket: 'sample-hiroyuki001.appspot.com',
    messagingSenderId: '853783108883',
    appId: '1:853783108883:web:791542a171ea5e7e088ee6',
  })
}

export { firebase }
