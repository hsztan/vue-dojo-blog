import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCq6PuwuZVuvrwMqyiGpcaox2wdGkYrgdA',
  authDomain: 'vue-firebase-sites-peluso.firebaseapp.com',
  projectId: 'vue-firebase-sites-peluso',
  storageBucket: 'vue-firebase-sites-peluso.appspot.com',
  messagingSenderId: '550483390363',
  appId: '1:550483390363:web:28a790e644da70fc8dbb3e'
}

// init firebase
firebase.initializeApp(firebaseConfig)

// init firestore service
const projectFirestore = firebase.firestore()

export { projectFirestore }
